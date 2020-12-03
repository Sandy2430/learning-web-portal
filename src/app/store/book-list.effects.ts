import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AppService } from "../app.service";
import {
  loadBookList,
  loadBookListFailure,
  loadBookListSuccess,
} from "./book-list.action";

@Injectable()
export class BookListEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookList),
      mergeMap(() =>
        this.appService.getBooks().pipe(
          map((books) => loadBookListSuccess({ bookListDetails: books })),
          catchError((err) => of(loadBookListFailure({ bookError: err })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
