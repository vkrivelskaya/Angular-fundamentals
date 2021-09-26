import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/course';
import { ButtonsEnum } from '../../../shared/enums/buttons.enum';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses!: Course[];
  @Input() isEditable!: boolean;
  @Output() clickButton = new EventEmitter();

  penIcon = faPen;
  trashIcon = faTrash;
  showCourseButtonText = ButtonsEnum.showCourse;

  constructor() {}

  onButtonClick(value: any): void {
    this.clickButton.emit(value);
  }
}
