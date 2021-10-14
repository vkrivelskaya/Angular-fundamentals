import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';

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
  isValidInput!: boolean;
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  passwordIcon!: IconDefinition;

  constructor(private ref: ChangeDetectorRef) {}

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
      const userEmail = loginForm.form.value.mail;
      const password = loginForm.form.value.password;
      alert('Welcome..!!');
      console.log(userEmail, password);
    }
  }
}
