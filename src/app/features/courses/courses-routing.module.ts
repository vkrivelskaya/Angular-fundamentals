import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from '../course/components/course/course.component';
import { AdminGuard } from '../../user/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: ':id',
        component: CourseComponent
      },
      {
        path: 'add',
        component: CourseComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'edit/:id',
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
