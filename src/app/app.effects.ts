import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, tap } from "rxjs/operators";
import { AppService } from "./app.service";
import { AppState } from "./reducers";
import { getBook, getBookSuccess } from "./reducers/books.action";
import { loadBookListSuccess } from "./store/book-list.action";

@Injectable()
export class AppEffects1 {
  constructor(private actions$: Actions, private appService: AppService) {}
  log = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );

  getBookList = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListSuccess),
      map((books) => books),
      switchMap(() => this.appService.getBooks()),
      map((books) => loadBookListSuccess({ bookListDetails: books }))
    )
  );
}
