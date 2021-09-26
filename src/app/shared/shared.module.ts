import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationPipe } from './pipes/duration.pipe';
import {
  ButtonComponent,
  FooterComponent,
  HeaderComponent,
  InfoComponent,
  NavigationComponent,
  SearchComponent,
  ModalWindowComponent
} from './components';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  NavigationComponent,
  InfoComponent,
  SearchComponent,
  ModalWindowComponent
];

@NgModule({
  declarations: [...COMPONENTS, DurationPipe],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [...COMPONENTS, DurationPipe, CommonModule, FontAwesomeModule]
})
export class SharedModule {}
