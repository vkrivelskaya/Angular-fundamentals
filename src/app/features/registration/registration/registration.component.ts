import { Component } from '@angular/core';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationButtonText = ButtonsEnum.registration;
  buttonType = 'submit';
  name!: string;
  mail!: string;
  password!: string;

  constructor() {}

  registrate(registrationForm: NgForm) {
    if (registrationForm && registrationForm.valid) {
      const userEmail = registrationForm.form.value.mail;
      const password = registrationForm.form.value.password;
      const name = registrationForm.form.value.name;
      console.log(userEmail, password, name);
    }
  }
}
