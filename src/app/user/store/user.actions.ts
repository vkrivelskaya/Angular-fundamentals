import { createAction, props } from '@ngrx/store';
import { IUser } from '../../constants/models';

export const requestCurrentUser = createAction('[User] Get User');

export const requestCurrentUserSuccess = createAction('[User] Get User Success', props<{ user: IUser }>());

export const requestCurrentUserFail = createAction('[User] Get User Error');
