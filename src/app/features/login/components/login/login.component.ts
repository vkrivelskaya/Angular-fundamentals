import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { AuthStateFacade } from '../../../../auth/store/auth.facade';
import { UserStateFacade } from '../../../../user/store/user.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewChecked {
  @ViewChild('passwordToggleField') passwordToggleField: ElementRef | undefined;

  loginButtonText = ButtonsEnum.login;
  buttonType = 'submit';
  mail!: string;
  password!: string;
  name!: string;
  isValidInput!: boolean;
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  passwordIcon!: IconDefinition;
  isAuthorized!: Observable<boolean>;

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private authStateFacade: AuthStateFacade,
    private userStateFacade: UserStateFacade
  ) {}

  ngOnInit() {
    this.passwordIcon = this.eyeIcon;
    this.isAuthorized = this.authStateFacade.isAuthorized$;
  }

  ngAfterViewChecked() {
    if (this.passwordToggleField) {
      this.passwordIcon =
        this.passwordToggleField.nativeElement.getAttribute('type') === 'password' ? this.eyeIcon : this.eyeSlashIcon;
    }

    this.ref.detectChanges();
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const user = {
        name: loginForm.form.value.name,
        email: loginForm.form.value.mail,
        password: loginForm.form.value.password
      };

      this.authStateFacade.login(user);

      this.isAuthorized.subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/courses/list');
          this.userStateFacade.getCurrentUser();
        } else {
          this.router.navigateByUrl('/registration');
        }
      });
    }
  }
}
