import { IUser } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: IUser[] | null;
  selectedUser: IUser | null;
  isAdmin: boolean;
  name: string | undefined;
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null,
  isAdmin: false,
  name: undefined
};

const reducer = createReducer(
  initialUserState,
  on(UserActions.requestCurrentUserSuccess, (state, { user, name, isAdmin }) => {
    return { ...state, user, name, isAdmin };
  }),
  on(UserActions.requestCurrentUserFail, state => ({ ...state, selectedUser: null }))
);

export const userReducer = (state: UserState | undefined, action: Action): UserState => reducer(state, action);
