import { IUser } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: IUser | null;
  isAuthorized: boolean | null;
  token: string | null;
  loginErrorMessage: string | null;
  registerErrorMessage: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthorized: null,
  token: null,
  loginErrorMessage: null,
  registerErrorMessage: null
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.requestLoginSuccess, (state, { token }) => {
    return { ...state, token };
  }),
  on(AuthActions.requestLoginFail, (state, { loginErrorMessage }) => {
    return { ...state, loginErrorMessage };
  }),
  on(AuthActions.requestRegisterSuccess, (state, { isAuthorized }) => {
    return { ...state, isAuthorized };
  }),
  on(AuthActions.requestRegisterFail, (state, { registerErrorMessage }) => {
    return { ...state, registerErrorMessage };
  }),
  on(AuthActions.requestLogoutSuccess, (state, { token }) => {
    return { ...state, token };
  })
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => reducer(state, action);
