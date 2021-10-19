import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { UserStoreService } from '../services/user-store.service';
import { CoursesStateFacade } from '../../store/courses/courses.facade';
import { UserStateFacade } from '../store/user.facade';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userStateFacade: UserStateFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userStateFacade.isAdmin$.pipe(
      take(1),
      map(data => {
        if (data) {
          return true;
        }

        return this.router.parseUrl('/courses');
      })
    );
  }
}
