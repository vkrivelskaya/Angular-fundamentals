import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor(@Inject('Window') window: Window) {}

  setToken(token: string) {
    window.sessionStorage.setItem('token', token);
  }
  getToken() {
    return window.sessionStorage.getItem('token');
  }

  deleteToken() {
    window.sessionStorage.removeItem('token');
  }
}
