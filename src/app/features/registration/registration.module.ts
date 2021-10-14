import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [SharedModule],
  exports: [RegistrationComponent]
})
export class RegistrationModule {}
