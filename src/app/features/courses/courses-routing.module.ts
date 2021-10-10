import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseComponent } from '../course/components/course/course.component';
import { AdminGuard } from '../../user/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'courses/:id',
        component: CourseCardComponent
      },
      {
        path: 'courses/add',
        component: CourseComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'courses/edit/:id',
        component: CourseComponent,
        canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
