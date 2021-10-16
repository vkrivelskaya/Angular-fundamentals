// create login$ effect which should use authService and on requestLogin action
// call login service method, then in case of success it should return
// TASK.md 7/12/2021
// 3 / 5
// requestLoginSuccess({ token }) action and requestLoginFail({
//   errorMessage }) in case of error

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../../auth/store/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ILoginResponse, IUser } from '../../constants/models';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestLogin),
      switchMap(({ user }: { user: IUser }) =>
        this.authService.login(user).pipe(
          map((response: ILoginResponse) => AuthActions.requestLoginSuccess({ token: response.result })),
          catchError(error => of(AuthActions.requestLoginFail({ loginErrorMessage: error.name })))
        )
      )
    )
  );
}
