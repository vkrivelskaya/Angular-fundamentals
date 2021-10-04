import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { DurationPipe } from './pipes/duration.pipe';
import {
  ButtonComponent,
  FooterComponent,
  HeaderComponent,
  InfoComponent,
  SearchComponent,
  ModalWindowComponent
} from './components';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalWindowComponent
];

const PIPES = [DurationPipe, CreationDatePipe, StringJoinerPipe];

@NgModule({
  declarations: [...COMPONENTS, PIPES, EmailValidatorDirective],
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
  exports: [...COMPONENTS, PIPES, CommonModule, FontAwesomeModule, FormsModule, EmailValidatorDirective]
})
export class SharedModule {}
