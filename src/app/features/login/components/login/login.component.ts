import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { AuthService } from '../../../../auth/services/auth.service';
import { UserStoreService } from '../../../../user/services/user-store.service';

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

  constructor(
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit() {
    this.passwordIcon = this.eyeIcon;
  }

  ngAfterViewChecked() {
    if (this.passwordToggleField) {
      this.passwordIcon =
        this.passwordToggleField.nativeElement.getAttribute('type') === 'password' ? this.eyeIcon : this.eyeSlashIcon;
    }

    this.ref.detectChanges();
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const user = {
        name: loginForm.form.value.name,
        email: loginForm.form.value.mail,
        password: loginForm.form.value.password
      };

      this.authService.login(user).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/courses/list');
          this.userStoreService.getUser();
        } else {
          this.router.navigateByUrl('/registration');
        }
      });
    }
  }
}
