import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CoursesActions from '../courses/courses.actions';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../../constants/models';
import { Router } from '@angular/router';
import { AuthorsStateFacade } from '../authors/authors.facade';
import { CoursesStateFacade } from './courses.facade';

@Injectable()
export class CoursesEffects {
  authorsMap = this.authorsStateFacade.authors$.pipe(
    map(authors => authors?.reduce((acc, el) => acc.set(el.id, el.name), new Map()))
  );

  constructor(
    private coursesService: CoursesService,
    private actions$: Actions,
    private router: Router,
    private authorsStateFacade: AuthorsStateFacade,
    private coursesStateFacade: CoursesStateFacade
  ) {}

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestDeleteCourse),
      switchMap(({ id }: { id: string }) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => CoursesActions.requestAllCourses()),
          catchError(error => of(CoursesActions.requestDeleteCourseFail({ err: error })))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestEditCourse),
      switchMap(({ course }: { course: ICourse }) =>
        this.coursesService.editCourse(course).pipe(
          map(response => CoursesActions.requestEditCourseSuccess({ course: response })),
          catchError(error => of(CoursesActions.requestEditCourseFail({ err: error })))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestCreateCourse),
      switchMap(({ course }: { course: ICourse }) =>
        this.coursesService.createCourse(course).pipe(
          map(response => CoursesActions.requestCreateCourseSuccess({ course: response })),
          catchError(error => of(CoursesActions.requestCreateCourseFail({ err: error })))
        )
      )
    )
  );

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestAllCourses),
      switchMap(() =>
        forkJoin([this.coursesService.getAll(), this.authorsMap.pipe(take(1))]).pipe(
          map(response =>
            response[0].map(course => ({
              ...course,
              authors: course.authors.map(el => response[1]?.get(el))
            }))
          ),
          map(response => CoursesActions.requestAllCoursesSuccess({ allCourses: response })),
          catchError(error => of(CoursesActions.requestAllCoursesFail({ err: error })))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestFilteredCourses),
      switchMap(({ searchValue }: { searchValue: string }) =>
        this.coursesStateFacade.allCourses$.pipe(
          map(courses => {
            return courses.filter(el => Object.values(el).filter(val => String(val).includes(searchValue)).length > 0);
          }),
          map(response => CoursesActions.requestFilteredCoursesSuccess({ courses: response }))
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestSingleCourse),
      switchMap(({ id }: { id: string }) =>
        forkJoin([this.coursesService.getCourse(id), this.authorsMap.pipe(take(1))]).pipe(
          map(response => ({
            ...response[0].result,
            authors: response[0].result.authors.map(el => response[1]?.get(el))
          })),
          map(response => CoursesActions.requestSingleCourseSuccess({ course: response })),
          catchError(error => of(CoursesActions.requestSingleCourseFail({ err: error })))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CoursesActions.requestCreateCourseSuccess,
          CoursesActions.requestEditCourseSuccess,
          CoursesActions.requestSingleCourseFail
        ),
        switchMap(() => this.router.navigateByUrl('courses'))
      ),
    { dispatch: false }
  );
}
