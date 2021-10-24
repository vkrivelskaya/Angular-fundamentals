import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [SharedModule, RegistrationRoutingModule],
  exports: [RegistrationComponent]
})
export class RegistrationModule {}
