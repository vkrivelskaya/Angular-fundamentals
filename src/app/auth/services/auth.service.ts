import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SessionStorageService } from './session-storage.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ILoginResponse, IRegisterResponse, IUser } from '../../constants/models';
import { loginUrl, logoutUrl, registerUrl } from '../../constants/urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(Boolean(this.sessionStorageService.getToken()));
  private registerUrl = registerUrl;
  private loginUrl = loginUrl;
  private logoutUrl = logoutUrl;

  isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private sessionStorageService: SessionStorageService, private http: HttpClient, private router: Router) {}

  login(user: IUser): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.loginUrl, user).pipe(
      map(data => {
        this.sessionStorageService.setToken(data.result);
        this.isAuthorized$$.next(data.successful);

        return data;
      })
    );
  }

  logout(): Observable<boolean> {
    const token = this.sessionStorageService.getToken();
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.delete<HttpResponse<void>>(this.logoutUrl, httpOptions).pipe(
        map(response => {
          if (response.status === 200) {
            this.sessionStorageService.deleteToken();
            this.isAuthorized$$.next(false);
            return true;
          }
          return false;
        }),
        catchError(() => {
          this.sessionStorageService.deleteToken();
          this.isAuthorized$$.next(false);
          return of(false);
        })
      );
    }
    return of(false);
  }

  register(user: IUser): Observable<boolean> {
    return this.http.post<IRegisterResponse>(this.registerUrl, user).pipe(map(data => data.successful));
  }
}
