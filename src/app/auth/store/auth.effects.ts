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
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private router: Router,
    private actions$: Actions,
    private sessionStorageService: SessionStorageService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestLogin),
      switchMap(({ user }: { user: IUser }) =>
        this.authService.login(user).pipe(
          map((response: ILoginResponse) => {
            this.sessionStorageService.setToken(response.result);
            return AuthActions.requestLoginSuccess({ token: response.result, isAuthorized: response.successful });
          }),
          catchError(error => of(AuthActions.requestLoginFail({ loginErrorMessage: error.name })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestRegister),
      switchMap(({ user }: { user: IUser }) =>
        this.authService.register(user).pipe(
          map(response => AuthActions.requestRegisterSuccess({ isRegister: response })),
          catchError(error => of(AuthActions.requestRegisterFail({ registerErrorMessage: error.name })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestLogout),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigateByUrl('/login');
            return AuthActions.requestLogoutSuccess({ isAuthorized: false });
          })
        )
      )
    )
  );
}
