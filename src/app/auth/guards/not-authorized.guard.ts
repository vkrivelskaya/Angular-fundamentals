import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  constructor(private router: Router, private authStateFacade: AuthStateFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStateFacade.isAuthorized$.pipe(
      take(1),
      map(data => {
        if (!data) {
          return true;
        }

        return this.router.parseUrl('/courses/list');
      })
    );
  }
}
