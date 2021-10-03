import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { CourseModule } from '../course/course.module';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseCardComponent],
  imports: [SharedModule, LoginModule, RegistrationModule, CourseModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
