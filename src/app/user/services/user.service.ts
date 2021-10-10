import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userUrl } from '../../constants/urls';
import { IUserResponse } from '../../constants/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = userUrl;
  constructor(private http: HttpClient) {}

  getUser(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(this.userUrl);
  }
}
