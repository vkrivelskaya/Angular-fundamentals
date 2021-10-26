import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { ICourse } from '../../../constants/models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses!: ICourse[] | null;
  @Input() isEditable!: boolean;
  @Output() clickButton = new EventEmitter();

  editCourseLink = 'edit';
  deleteCourseLink = 'courses';

  penIcon = faPen;
  trashIcon = faTrash;
  showCourseButtonText = ButtonsEnum.showCourse;

  constructor() {}

  onButtonClick(value: any, args?: { [key: string]: any }): void {
    this.clickButton.emit({ button: value, args: args });
  }
}
