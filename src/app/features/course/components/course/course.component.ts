import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { authorNameValidator } from '../../../../shared/directives/author-validator.directive';
import { CoursesStoreService } from '../../../../services/courses/courses-store.service';
import { Observable } from 'rxjs';
import { ICourse } from '../../../../constants/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  buttonType = 'submit';
  createCourseButtonText = ButtonsEnum.createCourse;
  createAuthorButtonText = ButtonsEnum.createAuthor;
  deleteAuthorButtonText = ButtonsEnum.deleteAuthor;
  courseForm!: FormGroup;
  author!: FormGroup;
  course$!: Observable<ICourse>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    this.courseForm = this.fb.group(
      {
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        duration: ['', [Validators.required, Validators.min(1)]],
        author: this.fb.group({
          author: ['', [authorNameValidator()]]
        }),

        authors: this.fb.array([])
      },
      { updateOn: 'blur' }
    );

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.course$ = this.coursesStoreService.getCourse(id);
    }
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  addAuthor() {
    this.authors.push(this.fb.control(this.courseForm.get('author')?.get('author')?.value));
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }

  onSubmit() {
    if (this.courseForm.valid && this.authors.valid) {
      console.log(this.courseForm.value);
    }
  }
}
