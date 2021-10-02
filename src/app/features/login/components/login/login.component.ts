import { Component } from '@angular/core';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginButtonText = ButtonsEnum.login;
  buttonType = 'submit';
  mail!: string;
  password!: string;
  isValidInput!: boolean;

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userEmail = loginForm.form.value.mail;
      const password = loginForm.form.value.password;
      alert('Welcome..!!');
      console.log(userEmail, password);
    }
  }
}
