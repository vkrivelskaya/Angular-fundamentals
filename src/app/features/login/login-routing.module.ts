import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotAuthorizedGuard } from '../../auth/guards/not-authorized.guard';

const routes: Routes = [{ path: '', component: LoginComponent, canActivate: [NotAuthorizedGuard] }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
