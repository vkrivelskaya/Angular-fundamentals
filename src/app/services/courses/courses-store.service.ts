import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../../constants/models';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<ICourse[]>([]);

  isLoading$ = this.isLoading$$.asObservable();
  isDataInitialized = false;

  constructor(private coursesService: CoursesService) {}

  get courses$(): Observable<ICourse[]> {
    if (!this.isDataInitialized) {
      this.getAll();
      this.isDataInitialized = true;
    }
    return this.courses$$.asObservable();
  }

  getAll(): void {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe(
      courses => {
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      },
      () => {
        this.isLoading$$.next(false);
      }
    );
  }

  createCourse(course: ICourse): void {
    this.isLoading$$.next(true);
    this.coursesService.createCourse(course).subscribe(
      newCourse => {
        let courses = this.courses$$.getValue();
        courses = [...courses, newCourse];
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      },
      () => this.isLoading$$.next(false)
    );
  }

  editCourse(course: ICourse): void {
    this.isLoading$$.next(true);
    this.coursesService.editCourse(course).subscribe(
      editedCourse => {
        let courses = this.courses$$.getValue();
        const courseIndex = courses.findIndex(el => el.id === editedCourse.id);
        courses.splice(courseIndex, 1);
        courses = [...courses, (courses[courseIndex] = editedCourse)];
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      },
      () => this.isLoading$$.next(false)
    );
  }

  getCourse(id: string): Observable<ICourse> {
    this.isLoading$$.next(true);
    return this.coursesService.getCourse(id);
  }

  deleteCourse(id: string): void {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe(
      () => {
        const courses = this.courses$$.getValue();
        const courseIndex = courses.findIndex(el => el.id === id);
        courses.splice(courseIndex, 1);
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      },
      () => this.isLoading$$.next(false)
    );
  }

  searchCourse(value: string): ICourse[] {
    const courses = this.courses$$.getValue();

    return courses.filter(el => {
      return Object.values(el).filter(val => String(val).includes(value)).length > 0;
    });
  }
}
