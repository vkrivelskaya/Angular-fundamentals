import { Component, OnInit } from '@angular/core';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Courses } from '../../mock/course-data.mock';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = Courses;
  penIcon = faPen;
  trashIcon = faTrash;
  showCourseButtonText = ButtonsEnum.showCourse;

  constructor() {}

  ngOnInit(): void {
    console.log(this.courses);
  }
}
