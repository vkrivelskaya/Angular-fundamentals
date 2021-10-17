import { ICourse } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from '../courses/courses.actions';

export interface CoursesState {
  allCourses: ICourse[];
  courses: ICourse[];
  course: ICourse | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialUserState: CoursesState = {
  allCourses: [],
  courses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
};

const reducer = createReducer(
  initialUserState,
  on(CoursesActions.requestAllCoursesSuccess, (state, { courses }) => {
    return { ...state, courses };
  }),
  on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => {
    return { ...state, course };
  }),
  on(CoursesActions.requestDeleteCourse, (state, { id }) => {
    return { ...state, id };
  }),
  on(CoursesActions.requestEditCourseSuccess, (state, { course }) => {
    return { ...state, course };
  }),
  on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => {
    return { ...state, courses };
  }),
  on(CoursesActions.requestSingleCourseSuccess, (state, { course }) => {
    return { ...state, course };
  })
);

export const coursesReducer = (state: CoursesState | undefined, action: Action): CoursesState => reducer(state, action);
