import { Component, OnInit } from '@angular/core';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../../../user/services/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-router-courses',
  templateUrl: './router-courses.component.html',
  styleUrls: ['./router-courses.component.scss']
})
export class RouterCoursesComponent implements OnInit {
  buttonText = ButtonsEnum.logOut;
  name!: Observable<string>;
  constructor(private authService: AuthService, private router: Router, private userStoreService: UserStoreService) {}

  ngOnInit() {
    this.name = this.userStoreService.name$;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
