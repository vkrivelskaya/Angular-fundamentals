import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';
import * as fromUserEffects from '../user/store/user.effects';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAuthors from '../store/authors/authors.reducer';
import * as fromAuthEffects from '../auth/store/auth.effects';
import * as fromAuthorsEffects from '../store/authors/authors.effects';
import * as fromCourses from '../store/courses/courses.reducer';
import * as fromCoursesEffects from '../store/courses/courses.effects';

export interface AppState {
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
  authors: fromAuthors.AuthorsState;
  courses: fromCourses.CoursesState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer,
  auth: fromAuth.authReducer,
  authors: fromAuthors.authorsReducer,
  courses: fromCourses.coursesReducer
};

export const effects = [
  fromUserEffects.UserEffects,
  fromAuthEffects.AuthEffects,
  fromAuthorsEffects.AuthorsEffects,
  fromCoursesEffects.CoursesEffects
];
