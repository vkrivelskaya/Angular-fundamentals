import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { authorNameValidator } from '../../../../shared/directives/author-validator.directive';

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

  constructor(private fb: FormBuilder) {}

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
