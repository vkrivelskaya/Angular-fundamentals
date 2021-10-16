import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';
import * as fromUserEffects from '../user/store/user.effects';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAuthEffects from '../auth/store/auth.effects';

export interface AppState {
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer,
  auth: fromAuth.authReducer
};

export const effects = [fromUserEffects.UserEffects, fromAuthEffects.AuthEffects];
