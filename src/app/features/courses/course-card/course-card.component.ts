import { Component, Input, OnInit } from '@angular/core';

import { ICourse } from '../../../constants/models';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: ICourse;
  authors!: string[];

  constructor() {}

  ngOnInit(): void {
    this.authors = this.course.authors;
  }
}
