import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { AuthorsState } from './authors.reducer';

export const selectAuthors = createFeatureSelector<AppState, AuthorsState>('authors');
export const getAuthors = createSelector(selectAuthors, (authorsState: AuthorsState) => authorsState.authors);
export const getAddedAuthors = createSelector(selectAuthors, (authorsState: AuthorsState) => authorsState.addedAuthor);
