import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../index';
import { ICourse } from '../../constants/models';
import {
  getAllCourses,
  getCourse,
  getCourses,
  getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector
} from './courses.selectors';
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse
} from './courses.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesStateFacade {
  isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
  isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
  isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
  courses$ = this.store.pipe(select(getCourses));
  allCourses$ = this.store.pipe(select(getAllCourses));
  course$ = this.store.pipe(select(getCourse));
  errorMessage$ = this.store.pipe(select(getErrorMessage));

  constructor(private store: Store<AppState>) {}

  getAllCourses(): void {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: string): void {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  getFilteredCourses(searchValue: string): void {
    this.store.dispatch(requestFilteredCourses({ searchValue }));
  }
  editCourse(course: ICourse, id: string): void {
    this.store.dispatch(requestEditCourse({ course, id }));
  }
  createCourse(course: ICourse): void {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  deleteCourse(id: string): void {
    this.store.dispatch(requestDeleteCourse({ id }));
  }
}
