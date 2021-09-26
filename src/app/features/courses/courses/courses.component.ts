import { Component, OnInit } from '@angular/core';

import { Courses } from '../../mock/course-data.mock';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = Courses;
  isEditable!: boolean;
  isCoursesListEmpty!: boolean;
  addNewCourse = ButtonsEnum.addCourse;
  title = 'Your list is empty';
  text = `Please, use '${this.addNewCourse}' button to add your first course`;

  constructor() {}

  ngOnInit(): void {
    this.isEditable = true;
    this.isCoursesListEmpty = this.checkCoursesListLength();
  }

  checkCoursesListLength(): boolean {
    return this.courses.length === 0;
  }

  onButtonClick(event: any): void {
    console.log(event);
    if (event.buttonText === ButtonsEnum.showCourse) {
      this.showCourse();
    } else if (event.buttonIcon.iconName === 'trash') {
      this.deleteCourse();
    } else {
      this.editCourse();
    }
  }

  showCourse(): void {
    console.log('Show button clicked!');
  }

  editCourse(): void {
    console.log('Edit button clicked!');
  }

  deleteCourse(): void {
    console.log('Delete button clicked!');
  }
}
