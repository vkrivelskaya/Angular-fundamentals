import { IUser } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: IUser[] | null;
  selectedUser: IUser | null;
  isAdmin: boolean | null;
  name: string | null;
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null,
  isAdmin: null,
  name: null
};

const reducer = createReducer(
  initialUserState,
  on(UserActions.requestCurrentUserSuccess, (state, { user }) => {
    return { ...state, user };
  }),
  on(UserActions.requestCurrentUserFail, state => ({ ...state, selectedUser: null }))
);

export const userReducer = (state: UserState | undefined, action: Action): UserState => reducer(state, action);
