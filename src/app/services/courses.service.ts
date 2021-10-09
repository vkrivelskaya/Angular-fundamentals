import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthor, ICourse } from '../constants/models';
import { coursesAddUrl, coursesAllUrl, coursesUrl } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesAllUrl = coursesAllUrl;
  private coursesAddUrl = coursesAddUrl;
  private coursesUrl = coursesUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.coursesAllUrl);
  }

  createCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(this.coursesAddUrl, course, this.httpOptions);
  }

  getCourse(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.coursesUrl}/${id}`);
  }

  deleteCourse(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.coursesUrl}/${id}`);
  }

  editCourse(course: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(`${this.coursesUrl}/${course.id}`, course, this.httpOptions);
  }
}
