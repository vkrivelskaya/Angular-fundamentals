import { Component, OnInit } from '@angular/core';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { Router } from '@angular/router';
import { UserStateFacade } from '../../../user/store/user.facade';
import { AuthStateFacade } from '../../../auth/store/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-router-courses',
  templateUrl: './router-courses.component.html',
  styleUrls: ['./router-courses.component.scss']
})
export class RouterCoursesComponent implements OnInit {
  buttonText = ButtonsEnum.logOut;
  name!: string | undefined;
  isAuthorized!: Observable<boolean>;

  constructor(
    private router: Router,
    private userStateFacade: UserStateFacade,
    private authStateFacade: AuthStateFacade
  ) {}

  ngOnInit() {
    this.userStateFacade.getCurrentUser();
    this.userStateFacade.name$.subscribe(name => (this.name = name));
    this.isAuthorized = this.authStateFacade.isAuthorized$;
  }

  logout(): void {
    this.authStateFacade.closeSession();

    this.isAuthorized.subscribe(data => {
      if (!data) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
