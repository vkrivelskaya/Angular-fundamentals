import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { AuthStateFacade } from '../../../auth/store/auth.facade';

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
  isUserRegister = this.authStateFacade.isRegister$;

  constructor(private ref: ChangeDetectorRef, private router: Router, private authStateFacade: AuthStateFacade) {}

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
      const user = {
        email: registrationForm.form.value.mail,
        password: registrationForm.form.value.password,
        name: registrationForm.form.value.name
      };

      this.authStateFacade.register(user);

      this.isUserRegister.subscribe(data => {
        console.log(data);
        if (data) {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }
}
