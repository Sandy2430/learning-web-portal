import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { pluck, map } from "rxjs/operators";

import { BookList, VolumeInfo } from "./models";
import { addBookToCart } from "./store/book-list.action";
import { BooksState } from "./store/book-list.reducer";
import { getSearch } from "./store/book-list.selector";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private baseUrl = "https://www.googleapis.com/books/v1/volumes";
  cartData = new BehaviorSubject(null);
  cartLength = new BehaviorSubject(null);
  myCollection = new BehaviorSubject([]);

  constructor(private http: HttpClient, private store: Store<BooksState>) {}

  updateCartList(item): void {
    this.cartData.next(item);
  }
  updateCartLength(item): void {
    this.cartLength.next(item);
  }
  getUpdatedCartList(): Observable<any> {
    return this.cartData.asObservable();
  }
  getUpdatedCartLength(): Observable<any> {
    return this.cartLength.asObservable();
  }
  updateMyCollectionList(item: VolumeInfo[]): void {
    this.myCollection.next(item);
  }
  getUpdatedMyCollectionList(): Observable<any> {
    return this.myCollection.asObservable();
  }
  getCartLength() {
    this.cartData.subscribe((res) => {
      if (res) {
        return res.length;
      } else {
        return 0;
      }
    });
  }
  getCartItem() {
    this.getUpdatedCartList().subscribe((res) => {
      return res;
    });
  }
  getMyCollectionLength(): any {
    this.myCollection.subscribe((res) => {
      if (res) {
        return res.length;
      } else {
        return 0;
      }
    });
  }
  /* Fetch all book list */
  getBooks(): Observable<BookList[]> {
    let searchString;
    this.store.select(getSearch).subscribe((res) => {
      searchString = res;
    });
    const uri = "?q=";
    return this.http
      .get<BookList[]>(`${this.baseUrl}${uri}${searchString}`)
      .pipe(
        pluck("items"),
        map(
          (books: BookList[]) => books,
          (err) => console.log("Error Message", err)
        )
      );
  }
  /* Fetch specific book data */
  getFullBookData(volumeId: string): Observable<BookList> {
    console.log(`${this.baseUrl}/${volumeId}`);
    return this.http
      .get(`${this.baseUrl}/${volumeId}`)
      .pipe(map((bookData: any) => bookData.volumeInfo));
  }

  addToCart(cartData1: VolumeInfo[]) {
    this.store.dispatch(addBookToCart({ cartData: cartData1 }));
    // localStorage.setItem("cart-item", JSON.stringify(cartData));
  }
  getCartData() {
    return JSON.parse(localStorage.getItem("cart-item"));
  }
  uCartLen(cartData: VolumeInfo[]) {
    localStorage.setItem("cart-item", JSON.stringify(cartData));
  }
  getCartCollectionLength() {
    return JSON.parse(localStorage.getItem("cart-item")).length;
  }
}
