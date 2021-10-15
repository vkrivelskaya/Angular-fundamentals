import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';
import * as fromUserEffects from '../user/store/user.effects';

export interface AppState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer
};

export const effects = [fromUserEffects.UserEffects];
