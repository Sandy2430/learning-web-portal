import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { BookList, VolumeInfo } from "../../models";
import { BooksState } from "../reducer";
import * as BookSelectors from "../selector";
import * as bookAction from "../action";

@Injectable({
  providedIn: "root",
})
export class BookListFacadeService {
  constructor(public store: Store<BooksState>) {}

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
  loadSearchString(searchItem: string) {
    return this.store.dispatch(bookAction.loadSearchData({ searchItem }));
  }
  loadBookList() {
    return this.store.dispatch(bookAction.loadBookList());
  }
  getSpecificBookInfo(book: VolumeInfo) {
    return this.store.dispatch(bookAction.loadSpecificBook({ book }));
  }
  addToCart(cartData: VolumeInfo[]) {
    return this.store.dispatch(bookAction.addBookToCart({ cartData }));
  }
  getCartCount(cartCount: number) {
    return this.store.dispatch(bookAction.loadCartCount({ cartCount }));
  }
  proceedToPurchase(bookDetails: VolumeInfo) {
    return this.store.dispatch(bookAction.loadBuyItem({ buy: bookDetails }));
  }
  loadPurchaseItem(purchasedBookInfo: VolumeInfo[]) {
    return this.store.dispatch(
      bookAction.loadPurchaseItem({ purchaseList: purchasedBookInfo })
    );
  }
  loadBookPurchasedCount(count: number) {
    return this.store.dispatch(
      bookAction.loadBookPurchasedCount({ purchasedCount: count })
    );
  }
}
