import { Component, OnInit } from '@angular/core';

import { ButtonsEnum } from '../../../shared/enums/buttons.enum';
import { CoursesStoreService } from '../../../services/courses/courses-store.service';
import { ICourse } from '../../../constants/models';
import { UserStoreService } from '../../../user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses!: ICourse[];
  searchInputPlaceholder = 'Angular';
  isEditable!: boolean;
  isCoursesListEmpty!: boolean;
  addNewCourse = ButtonsEnum.addCourse;
  okButtonText = ButtonsEnum.ok;
  cancelButtonText = ButtonsEnum.cancel;
  modalWindowButtonText = ButtonsEnum.modalWindow;
  modalWindowTitle = 'Title';
  modalWindowMessage = 'Delete course?';
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
  eventButtonClick!: any;
  deletedCourseId!: string;

  constructor(
    private coursesStore: CoursesStoreService,
    private userStoreService: UserStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.checkUserRole();
    this.isEditable = true;

    this.coursesStore.courses$.subscribe(courses => {
      this.courses = courses;
      this.isCoursesListEmpty = this.checkCoursesListLength();
    });
  }

  checkUserRole(): void {
    this.userStoreService.isAdmin$.subscribe(data => (this.isEditable = data));
  }

  checkCoursesListLength(): boolean {
    return this.courses.length === 0;
  }

  getButton(button: any): string {
    return button.buttonText ? `text/${button.buttonText}` : `icon/${button.buttonIcon.iconName}`;
  }

  onButtonClick(event: any): void {
    this.eventButtonClick = event;
    this.buttonMap[this.getButton(event.button)].bind(this)(event.args);
  }

  showCourse(args: { courseId: string }): void {
    console.log('Show button clicked!');
    this.router.navigateByUrl(`courses/${args.courseId}`);
  }

  editCourse(args: { courseId: string }): void {
    console.log('Edit button clicked!', args.courseId);
    this.router.navigateByUrl(`courses/edit/${args.courseId}`);
  }

  deleteCourse(args: { courseId: string }): void {
    this.deletedCourseId = args.courseId;
    this.changeModalVisibility();
  }

  changeModalVisibility(): void {
    this.isModalWindow = !this.isModalWindow;
  }

  confirmModalMessage(): void {
    this.modalResult = true;
    this.coursesStore.deleteCourse(this.eventButtonClick.args.courseID);
    this.changeModalVisibility();
  }

  cancelModalMessage(): void {
    this.modalResult = false;
    this.changeModalVisibility();

    console.log(this.modalResult);
  }

  searchCourse(value: string): void {
    this.courses = this.coursesStore.searchCourse(value);
  }
}
