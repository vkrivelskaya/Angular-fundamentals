import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { effects, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HttpClientModule,
    LoginModule,
    RegistrationModule,
    AuthModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule {}
