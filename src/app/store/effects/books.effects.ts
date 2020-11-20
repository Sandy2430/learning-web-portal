import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import * as bookActions from "../actions/book-search-result.actions";

@Injectable()
export class BooksEffects {
  constructor(
      private actions$: Actions,
      private appService: AppService
      ) {}
  @Effect()
  loadBooks$ = this.actions$
  .pipe(
      ofType<bookActions.LoadBooksAction>(bookActions.bookListActions.LOAD_BOOKS),
      switchMap(() => {
    return this.appService.getBooks('baby').pipe(
        map((books: any) => new bookActions.LoadBooksSuccessAction(books)),
        catchError(error => of(new bookActions.LoadBooksFailAction(error)))
    );
})
  );
}
