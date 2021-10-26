import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import { requestCurrentUser } from '../../user/store/user.actions';
import {
  getLoginErrorMessage,
  getRegisterErrorMessage,
  getToken,
  isUserAuthorized,
  isUserRegister
} from './auth.selectors';
import {
  requestLogin,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister
} from './auth.actions';
import { IUser } from '../../constants/models';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateFacade {
  isAuthorized$ = this.store.pipe(select(isUserAuthorized));
  isRegister$ = this.store.pipe(select(isUserRegister));
  getToken$ = this.store.pipe(select(getToken));
  getLoginErrorMessage$ = this.store.pipe(select(getLoginErrorMessage));
  getRegisterErrorMessage$ = this.store.pipe(select(getRegisterErrorMessage));

  constructor(private store: Store<AppState>, private sessionStorageService: SessionStorageService) {}

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }

  login(user: IUser) {
    this.store.dispatch(requestLogin({ user: user }));
  }

  register(user: IUser): void {
    this.store.dispatch(requestRegister({ user: user }));
  }

  logout(): void {
    this.store.dispatch(requestLogout());
  }

  closeSession(): void {
    this.store.dispatch(requestLogoutSuccess({ isAuthorized: false }));
  }

  setAuthorization(): void {
    const token = this.sessionStorageService.getToken();
    if (token) {
      this.store.dispatch(requestLoginSuccess({ token: token, isAuthorized: true }));
    }
  }
}
