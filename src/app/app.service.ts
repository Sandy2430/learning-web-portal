import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { pluck, map } from "rxjs/operators";

import { BookList, VolumeInfo } from "./models";
import { addBookToCart } from "./store/action/book-list.action";
import { BooksState } from "./store/reducer/book-list.reducer";
import { getSearch } from "./store/selector/book-list.selector";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private baseUrl = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient, private store: Store<BooksState>) {}
  /* Fetch all book list */
  getBooks(): Observable<BookList[]> {
    let searchString;
    this.store.select(getSearch).subscribe((res) => {
      searchString = res;
    });
    const bookApi = `${this.baseUrl}?q=${searchString}`;
    return this.http
      .get<BookList[]>(bookApi)
      .pipe(
        pluck("items"),
        map(
          (books: BookList[]) => books,
          (err) => console.log("Error Message", err)
        )
      );
  }
}
