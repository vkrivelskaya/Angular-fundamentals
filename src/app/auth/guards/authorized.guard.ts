import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
  constructor(private router: Router, private authStateFacade: AuthStateFacade) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authStateFacade.setAuthorization();
    return this.authStateFacade.isAuthorized$.pipe(
      take(1),
      map(data => {
        if (data) {
          return true;
        }

        return this.router.parseUrl('/login');
      })
    );
  }
}
