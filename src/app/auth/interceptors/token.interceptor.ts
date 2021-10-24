import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { SessionStorageService } from '../services/session-storage.service';
import { AuthService } from '../services/auth.service';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private sessionStorageService: SessionStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.sessionStorageService.getToken()}`
      }
    });

    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
        return throwError(error);
      })
    );
  }
}
