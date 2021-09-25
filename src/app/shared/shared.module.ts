import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { DurationPipe } from './pipes/duration.pipe';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  NavigationComponent,
  InfoComponent,
  SearchComponent
];

@NgModule({
  declarations: [...COMPONENTS, DurationPipe],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [...COMPONENTS, DurationPipe]
})
export class SharedModule {}
