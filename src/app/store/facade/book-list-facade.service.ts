import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { BookList, VolumeInfo } from "../../models";
import { BooksState } from "../reducer/book-list.reducer";
import * as BookSelectors from "../selector/book-list.selector";

@Injectable({
  providedIn: "root",
})
export class BookListFacadeService {
  constructor(private store: Store<BooksState>) {}

  getBookList(): Observable<BookList[]> {
    return this.store.select(BookSelectors.getBooks);
  }

  getCompleteBookInfo(): Observable<VolumeInfo> {
    return this.store.select(BookSelectors.getSelectedBook);
  }
  getCartItems(): Observable<VolumeInfo[]> {
    return this.store.select(BookSelectors.getCartItem);
  }

  getCartLength(): Observable<number> {
    return this.store.select(BookSelectors.getCartCount);
  }

  getProceedToBuyInfo(): Observable<VolumeInfo> {
    return this.store.select(BookSelectors.getProceedToBuy);
  }

  getPurchasedData(): Observable<VolumeInfo[]> {
    return this.store.select(BookSelectors.getPurchasedList);
  }

  getMyCollectionLength(): Observable<number> {
    return this.store.select(BookSelectors.getCollectionCount);
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
