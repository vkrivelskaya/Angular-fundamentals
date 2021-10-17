import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../constants/models';

export const requestAllCourses = createAction('[Courses Page] Courses');
export const requestAllCoursesSuccess = createAction('[Courses Page] Courses Success', props<{ courses: ICourse[] }>());
export const requestAllCoursesFail = createAction('[Courses Page] Courses Fail', props<{ err: Error }>());
export const requestSingleCourse = createAction('[Course Page] Course', props<{ id: string }>());
export const requestSingleCourseSuccess = createAction('[Course Page] Course Success', props<{ course: ICourse }>());
export const requestSingleCourseFail = createAction('[Course Page] Course Fail', props<{ err: Error }>());
export const requestFilteredCourses = createAction('[Courses Page] Filter Courses', props<{ searchValue: string }>());
export const requestFilteredCoursesSuccess = createAction(
  '[Courses Page] Filter Courses Success',
  props<{ courses: ICourse[] }>()
);
export const requestDeleteCourse = createAction('[Course Page] Delete Course', props<{ id: string }>());
export const requestDeleteCourseFail = createAction('[Course Page] Delete Course Fail', props<{ err: Error }>());
export const requestEditCourse = createAction('[Course Page] Edit Course', props<{ course: ICourse; id: string }>());
export const requestEditCourseSuccess = createAction('[Course Page] Edit Course Success', props<{ course: ICourse }>());
export const requestEditCourseFail = createAction('[Course Page] Edit Course Fail', props<{ err: Error }>());
export const requestCreateCourse = createAction('[Course Page] Add Course', props<{ course: ICourse }>());
export const requestCreateCourseSuccess = createAction(
  '[Course Page] Add Course Success',
  props<{ course: ICourse }>()
);
export const requestCreateCourseFail = createAction('[Course Page] Add Course Fail', props<{ err: Error }>());
