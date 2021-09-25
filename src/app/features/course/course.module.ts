import { NgModule } from '@angular/core';

import { CourseComponent } from './components/course/course.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, SharedModule],
  exports: [CourseComponent]
})
export class CourseModule {}
