import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string>('');
  private isAdmin$$ = new BehaviorSubject<boolean>(false);

  name$ = this.name$$.asObservable();
  isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.name$$.next(user.result.name);
      this.isAdmin$$.next(user.result.role !== 'admin');
    });
  }
}
