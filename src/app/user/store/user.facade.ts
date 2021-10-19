import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getName, isAdmin } from './user.selectors';
import { AppState } from '../../store';
import { requestCurrentUser } from './user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserStateFacade {
  name$ = this.store.pipe(select(getName));
  isAdmin$ = this.store.pipe(select(isAdmin));

  constructor(private store: Store<AppState>) {}

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}
