import { IUser } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: IUser | null;
  isAuthorized: boolean;
  isRegister: boolean;
  token: string | null;
  loginErrorMessage: string | null;
  registerErrorMessage: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthorized: false,
  isRegister: false,
  token: null,
  loginErrorMessage: null,
  registerErrorMessage: null
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.requestLoginSuccess, (state, { token, isAuthorized }) => {
    return { ...state, token, isAuthorized };
  }),
  on(AuthActions.requestLoginFail, (state, { loginErrorMessage }) => {
    return { ...state, loginErrorMessage };
  }),
  on(AuthActions.requestRegisterSuccess, (state, { isRegister }) => {
    return { ...state, isRegister };
  }),
  on(AuthActions.requestRegisterFail, (state, { registerErrorMessage }) => {
    return { ...state, registerErrorMessage };
  }),
  on(AuthActions.requestLogoutSuccess, (state, { isAuthorized }) => {
    return { ...state, isAuthorized };
  })
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => reducer(state, action);
