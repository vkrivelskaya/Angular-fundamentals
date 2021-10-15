import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as UserActions from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IUserResponse } from '../../constants/models';
import { requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.requestCurrentUser),
      switchMap(() =>
        this.userService.getUser().pipe(
          map((response: IUserResponse) => requestCurrentUserSuccess({ user: response.result })),
          catchError(() => of(requestCurrentUserFail()))
        )
      )
    )
  );
}
