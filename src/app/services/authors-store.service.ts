import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthorsService } from './authors.service';
import { IAuthor } from '../constants/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<IAuthor[]>([]);

  isLoading$ = this.isLoading$$.asObservable();
  authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  getAll() {
    this.isLoading$$.next(true);
    this.authorsService.getAll().subscribe(
      authors => {
        this.authors$$.next(authors);
        this.isLoading$$.next(false);
      },
      () => {
        this.isLoading$$.next(false);
      }
    );
  }

  addAuthor(author: IAuthor) {
    this.isLoading$$.next(true);
    this.authorsService.addAuthor(author).subscribe(
      newAuthor => {
        let authors = this.authors$$.getValue();
        authors = [...authors, newAuthor];
        this.authors$$.next(authors);
        this.isLoading$$.next(false);
      },
      () => this.isLoading$$.next(false)
    );
  }
}
