import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { authorNameValidator } from '../../../../shared/directives/author-validator.directive';
import { ICourse } from '../../../../constants/models';
import { CoursesStateFacade } from '../../../../store/courses/courses.facade';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  buttonTypeSubmit = 'submit';
  buttonTypeButton = 'button';
  createCourseButtonText = ButtonsEnum.createCourse;
  createAuthorButtonText = ButtonsEnum.createAuthor;
  deleteAuthorButtonText = ButtonsEnum.deleteAuthor;
  courseForm!: FormGroup;
  author!: FormGroup;
  courseItem!: ICourse;
  id!: string | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesStateFacade: CoursesStateFacade
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id && this.id !== 'add') {
      this.coursesStateFacade.getSingleCourse(this.id);
      this.coursesStateFacade.course$.subscribe(course => {
        if (course) {
          this.courseItem = course;

          this.courseForm = this.fb.group(
            {
              title: [`${course.title}` || '', [Validators.required]],
              description: [`${course.description}` || '', [Validators.required]],
              duration: [`${course.duration}` || '', [Validators.required, Validators.min(1)]],
              author: this.fb.group({
                author: [`${course.authors[0]}` || '', [authorNameValidator()]]
              }),

              authors: this.fb.array([])
            },
            { updateOn: 'blur' }
          );
        }
      });
    } else {
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
      const updatedCourse: ICourse = {
        title: this.courseForm.value.title,
        description: this.courseForm.value.description,
        creationDate: this.courseForm.value.creationDate,
        duration: this.courseForm.value.duration,
        authors: this.courseForm.value.authors
      };
      if (this.courseItem && this.courseItem.id !== 'add') {
        updatedCourse.id = this.courseItem.id;
        this.coursesStateFacade.editCourse(updatedCourse);
        console.log(updatedCourse);
      } else {
        this.coursesStateFacade.createCourse(updatedCourse);
      }
    }
  }
}
