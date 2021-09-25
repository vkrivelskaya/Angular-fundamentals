import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseModule } from '../course/course.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoursesComponent],
  imports: [SharedModule, CourseModule, CommonModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
