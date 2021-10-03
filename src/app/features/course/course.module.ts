import { NgModule } from '@angular/core';

import { CourseComponent } from './components/course/course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [ReactiveFormsModule, SharedModule],
  exports: [CourseComponent]
})
export class CourseModule {}
