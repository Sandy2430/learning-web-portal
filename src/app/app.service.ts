import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap, map } from 'rxjs/operators';

import { BookList } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  cartData = new BehaviorSubject(null);
  cartLength = new BehaviorSubject(null);
  myCollection = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

 
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
  updateMyCollectionList(item): void {
    this.myCollection.next(item);
  }
  getUpdatedMyCollectionList(): Observable<any> {
    return this.myCollection.asObservable();
  }
  getCartLength(): any {
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
  getMyCollectionLength(): any {
    this.myCollection.subscribe(res => {
      if (res) {
        return res.length;
      } else {
        return 0;
      }
    });
  }
  getBooks(searchdata): Observable<BookList[]> {
      return this.http.get<BookList[]>(`${this.baseBookUrl}${searchdata}`)
      .pipe(
          pluck('items'),
          map((books: BookList[]) => books)
      );
}
}
