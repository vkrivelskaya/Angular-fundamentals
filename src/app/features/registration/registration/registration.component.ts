import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../shared/enums/buttons.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewChecked {
  @ViewChild('passwordToggleField') passwordToggleField: ElementRef | undefined;

  registrationButtonText = ButtonsEnum.registration;
  buttonType = 'submit';
  name!: string;
  mail!: string;
  password!: string;
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

  register(registrationForm: NgForm) {
    if (registrationForm && registrationForm.valid) {
      const userEmail = registrationForm.form.value.mail;
      const password = registrationForm.form.value.password;
      const name = registrationForm.form.value.name;
      console.log(userEmail, password, name);
    }
  }
}
