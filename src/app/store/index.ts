import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';
import * as fromUserEffects from '../user/store/user.effects';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAuthors from '../store/authors/authors.reducer';
import * as fromAuthEffects from '../auth/store/auth.effects';
import * as fromAuthorsEffects from '../store/authors/authors.effects';

export interface AppState {
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
  authors: fromAuthors.AuthorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer,
  auth: fromAuth.authReducer,
  authors: fromAuthors.authorsReducer
};

export const effects = [fromUserEffects.UserEffects, fromAuthEffects.AuthEffects, fromAuthorsEffects.AuthorsEffects];
