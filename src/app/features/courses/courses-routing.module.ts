import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from '../course/components/course/course.component';
import { AdminGuard } from '../../user/guards/admin.guard';
import { RouterCoursesComponent } from './router-courses/router-courses.component';

const routes: Routes = [
  {
    path: '',
    component: RouterCoursesComponent,
    children: [
      {
        path: 'list',
        component: CoursesComponent
      },
      {
        path: ':id',
        component: CourseComponent
      },
      {
        path: 'add',
        component: CourseComponent
        // canActivate: [AdminGuard]
      },
      {
        path: 'edit/:id',
        component: CourseComponent
        // canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
