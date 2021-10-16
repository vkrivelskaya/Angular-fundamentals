import { createAction, props } from '@ngrx/store';
import { IAuthor } from '../../constants/models';

export const requestAuthors = createAction('[Authors Page] Authors');
export const requestAuthorsSuccess = createAction('[Authors Page] Authors Success', props<{ authors: IAuthor[] }>());
export const requestAuthorsFail = createAction('[Authors Page] Authors Fail', props<{ err: Error }>());
export const requestAddAuthor = createAction('[Authors Page] Add Author', props<{ author: IAuthor }>());
export const requestAddAuthorSuccess = createAction('[Authors Page] Add Author Success', props<{ author: IAuthor }>());
export const requestAddAuthorFail = createAction('[Authors Page] Add Author Fail', props<{ err: Error }>());
export const resetAddedAuthor = createAction('[Authors Page] Reset Author', props<{ author: null }>());
