import { UserState } from './user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../store';

export const selectUser = createFeatureSelector<AppState, UserState>('user');

export const selectSelectedUser = createSelector(selectUser, (userState: UserState) => userState.selectedUser);

export const getName = createSelector(selectUser, (userState: UserState) => {
  return userState.name;
});

export const isAdmin = createSelector(selectUser, (userState: UserState) => {
  return userState.isAdmin;
});
