import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../store';
import { AuthState } from './auth.reducer';

export const selectAuth = createFeatureSelector<AppState, AuthState>('auth');
export const isUserAuthorized = createSelector(selectAuth, (authState: AuthState) => authState.isAuthorized);
export const getToken = createSelector(selectAuth, (authState: AuthState) => authState.token);
export const getLoginErrorMessage = createSelector(selectAuth, (authState: AuthState) => authState.loginErrorMessage);
export const getRegisterErrorMessage = createSelector(
  selectAuth,
  (authState: AuthState) => authState.registerErrorMessage
);
