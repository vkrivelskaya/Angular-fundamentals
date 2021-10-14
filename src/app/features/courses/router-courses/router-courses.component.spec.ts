import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCoursesComponent } from './router-courses.component';

describe('RouterCoursesComponent', () => {
  let component: RouterCoursesComponent;
  let fixture: ComponentFixture<RouterCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterCoursesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
