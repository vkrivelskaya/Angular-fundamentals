import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthorsActions from '../authors/authors.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IAuthor } from '../../constants/models';
import { of } from 'rxjs';
import { AuthorsService } from '../../services/authors/authors.service';

@Injectable()
export class AuthorsEffects {
  constructor(private authorsService: AuthorsService, private actions$: Actions) {}

  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActions.requestAuthors),
      switchMap(() =>
        this.authorsService.getAll().pipe(
          map(response => AuthorsActions.requestAuthorsSuccess({ authors: response })),
          catchError(error => of(AuthorsActions.requestAuthorsFail({ err: error })))
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActions.requestAddAuthor),
      switchMap(({ author }: { author: IAuthor }) =>
        this.authorsService.addAuthor(author).pipe(
          map(response => AuthorsActions.requestAddAuthorSuccess({ author: response })),
          catchError(error => of(AuthorsActions.requestAddAuthorFail({ err: error })))
        )
      )
    )
  );
}
