import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap, map, toArray, concatAll, concatMap, mergeAll, filter } from 'rxjs/operators';
import { BookList, VolumeInfo } from './web-library/models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl ='https://jsonplaceholder.typicode.com/';
  private baseBookUrl ='https://www.googleapis.com/books/v1/volumes?q=';
  getSearchString = new BehaviorSubject(null);
  cartData = new BehaviorSubject(null);
  cartLength = new BehaviorSubject(null);
  myCollection = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getBookDetails() {
    return this.http.get('../assets/book-details.json')
    .pipe(
      pluck('items'),
      map((data: any) => (data)),
    );
  }
  updateSearchString(searchItem: string) {
    this.getSearchString.next(searchItem);
  }
  getUpdatedSearchString() {
    return this.getSearchString.asObservable();
  }
  updateCartList(item) {
    this.cartData.next(item);
  }
  updateCartLength(item) {
    this.cartLength.next(item);
  }
  getUpdatedCartList() {
    return this.cartData.asObservable();
  }
  getUpdatedCartLength() {
    return this.cartLength.asObservable();
  }
  updateMyCollectionList(item) {
    this.myCollection.next(item);
  }
  getUpdatedMyCollectionList() {
    return this.myCollection.asObservable();
  }
  getCartLength() {
    this.cartData.subscribe(res => {
      if (res) {
        return res.length;
      } else {
        return 0;
      }
    });
  }
  getCartItem(): any {
    this.getUpdatedCartList().subscribe(
      res => {
        return res;
      }
    );
  }
  getMyCollectionLength() {
    this.myCollection.subscribe(res => {
      if (res) {
        return res.length;
      } else {
        return 0;
      }
    });
  }
  getUser(uri: string, params?: any) {
    const data = { params };
    return this.http.get(this.baseUrl + uri, data);
  }
  getBooks(): Observable<BookList[]> {
    let searchdata = '';
    this.getUpdatedSearchString().subscribe(
      searchString => {
        searchdata = searchString;
      }
    );
    return this.http.get<BookList[]>(`${this.baseBookUrl}${searchdata}`)
    .pipe(
        pluck('items'),
       tap(console.log),
        map((books: any) => books)
    );
}
}
