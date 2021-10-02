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
  searchInputPlaceholder = 'Angular';
  isEditable!: boolean;
  isCoursesListEmpty!: boolean;
  buttonText = ButtonsEnum.logOut;
  addNewCourse = ButtonsEnum.addCourse;
  okButtonText = ButtonsEnum.ok;
  cancelButtonText = ButtonsEnum.cancel;
  modalWindowButtonText = ButtonsEnum.modalWindow;
  modalWindowTitle = 'Title';
  modalWindowMessage = 'Modal window message';
  title = 'Your list is empty';
  text = `Please, use '${this.addNewCourse}' button to add your first course`;
  isModalWindow = false;
  buttonMap: { [key: string]: any } = {
    'text/Ok': this.confirmModalMessage,
    'text/Cancel': this.cancelModalMessage,
    'text/Show course': this.showCourse,
    'icon/times': this.changeModalVisibility,
    'icon/pen': this.editCourse,
    'icon/trash': this.deleteCourse
  };
  modalResult!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isEditable = true;
    this.isCoursesListEmpty = this.checkCoursesListLength();
  }

  checkCoursesListLength(): boolean {
    return this.courses.length === 0;
  }

  getButton(event: any): string {
    return event.buttonText ? `text/${event.buttonText}` : `icon/${event.buttonIcon.iconName}`;
  }

  onButtonClick(event: any): void {
    this.buttonMap[this.getButton(event)].bind(this)();
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

  changeModalVisibility(): void {
    this.isModalWindow = !this.isModalWindow;
  }

  confirmModalMessage(): void {
    this.modalResult = true;
    this.changeModalVisibility();

    console.log(this.modalResult);
  }

  cancelModalMessage(): void {
    this.modalResult = false;
    this.changeModalVisibility();

    console.log(this.modalResult);
  }

  searchCourse(value: string): void {
    console.log(value);
  }
}
