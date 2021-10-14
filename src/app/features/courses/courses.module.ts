import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseModule } from '../course/course.module';
import { RouterCoursesComponent } from './router-courses/router-courses.component';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseCardComponent, RouterCoursesComponent],
  imports: [SharedModule, CoursesRoutingModule, CourseModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
