import { createAction, props } from '@ngrx/store';
import { IUser } from '../../constants/models';

export const requestLogin = createAction('[Login Page] Login', props<{ user: IUser }>());

export const requestLoginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ token: string; isAuthorized: boolean }>()
);

export const requestLoginFail = createAction('[Login Page] Login Fail', props<{ loginErrorMessage: string }>());

export const requestRegister = createAction('[Register Page] Register', props<{ user: IUser }>());

export const requestRegisterSuccess = createAction(
  '[Register Page] Register Success',
  props<{ isRegister: boolean }>()
);

export const requestRegisterFail = createAction(
  '[Register Page] Register Fail',
  props<{ registerErrorMessage: string }>()
);

export const requestLogout = createAction('[Logout Page] Logout');

export const requestLogoutSuccess = createAction('[Logout Page] Logout Success', props<{ isAuthorized: boolean }>());
