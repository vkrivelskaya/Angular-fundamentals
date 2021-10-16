import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../index';
import { IAuthor } from '../../constants/models';
import { getAddedAuthors, getAuthors } from './authors.selectors';
import { requestAddAuthor, requestAuthors } from './authors.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStateFacade {
  authors$ = this.store.pipe(select(getAuthors));
  addedAuthor$ = this.store.pipe(select(getAddedAuthors));

  constructor(private store: Store<AppState>) {}

  getAuthors(): void {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(author: IAuthor): void {
    this.store.dispatch(requestAddAuthor({ author }));
  }
}
