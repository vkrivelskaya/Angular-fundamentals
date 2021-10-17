import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAuthor, IAuthorResponse } from '../../constants/models';
import { authorsAddUrl, authorsAllUrl } from '../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private authorsAllUrl = authorsAllUrl;
  private authorsAddUrl = authorsAddUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<IAuthorResponse> {
    return this.http.get<IAuthorResponse>(this.authorsAllUrl);
  }

  addAuthor(author: IAuthor): Observable<IAuthor> {
    return this.http.put<IAuthor>(this.authorsAddUrl, author, this.httpOptions);
  }
}
