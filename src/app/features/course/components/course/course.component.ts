import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonsEnum } from '../../../../shared/enums/buttons.enum';
import { authorNameValidator } from '../../../../shared/directives/author-validator.directive';
import { CoursesStoreService } from '../../../../services/courses/courses-store.service';
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
  courseItem!: ICourse;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.coursesStoreService.getCourse(id).subscribe(course => {
        this.courseItem = course;

        this.courseForm = this.fb.group(
          {
            title: [`${course.title}`, [Validators.required]],
            description: [`${course.description}`, [Validators.required]],
            duration: [`${course.duration}`, [Validators.required, Validators.min(1)]],
            author: this.fb.group({
              author: [`${course.authors[0]}`, [authorNameValidator()]]
            }),

            authors: this.fb.array([])
          },
          { updateOn: 'blur' }
        );
      });
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
      if (this.courseItem) {
        const updatedCourse: ICourse = {
          title: this.courseForm.value.title,
          description: this.courseForm.value.description,
          creationDate: this.courseForm.value.creationDate,
          duration: this.courseForm.value.duration,
          authors: this.courseForm.value.authors,
          id: this.courseItem.id
        };
        this.coursesStoreService.editCourse(updatedCourse);
        this.coursesStoreService.isLoading$.subscribe(data => {
          if (!data) {
            this.router.navigateByUrl('courses/list');
          }
        });
        console.log(updatedCourse);
      }
    }
  }
}
