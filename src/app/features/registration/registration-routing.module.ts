import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { NotAuthorizedGuard } from '../../auth/guards/not-authorized.guard';

const routes: Routes = [{ path: '', component: RegistrationComponent, canActivate: [NotAuthorizedGuard] }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {}
