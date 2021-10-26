import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { CoursesState } from './courses.reducer';

export const selectCourses = createFeatureSelector<AppState, CoursesState>('courses');
export const getAllCourses = createSelector(selectCourses, (coursesState: CoursesState) => coursesState.allCourses);
export const isAllCoursesLoadingSelector = createSelector(
  selectCourses,
  (coursesState: CoursesState) => coursesState.isAllCoursesLoading
);
export const isSearchingStateSelector = createSelector(
  selectCourses,
  (coursesState: CoursesState) => coursesState.isSearchState
);
export const isSingleCourseLoadingSelector = createSelector(
  selectCourses,
  (coursesState: CoursesState) => coursesState.isSingleCourseLoading
);
export const getCourses = createSelector(selectCourses, (coursesState: CoursesState) => coursesState.courses);
export const getCourse = createSelector(selectCourses, (coursesState: CoursesState) => coursesState.course);
export const getErrorMessage = createSelector(selectCourses, (coursesState: CoursesState) => coursesState.errorMessage);
