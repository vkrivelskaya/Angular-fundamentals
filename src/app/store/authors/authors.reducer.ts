import { IAuthor } from '../../constants/models';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthorsActions from '../authors/authors.actions';

export interface AuthorsState {
  authors: IAuthor[] | null;
  addedAuthor: IAuthor | null;
}

export const initialUserState: AuthorsState = {
  authors: [],
  addedAuthor: null
};

const reducer = createReducer(
  initialUserState,
  on(AuthorsActions.requestAuthorsSuccess, (state, { authors }) => {
    return { ...state, authors };
  }),
  on(AuthorsActions.requestAddAuthorSuccess, (state, { author }) => {
    return { ...state, author };
  }),
  on(AuthorsActions.resetAddedAuthor, (state, { author }) => {
    return { ...state, author };
  })
);

export const authorsReducer = (state: AuthorsState | undefined, action: Action): AuthorsState => reducer(state, action);
