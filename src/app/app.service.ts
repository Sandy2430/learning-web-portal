import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pluck, tap, map, toArray, concatAll, concatMap, mergeAll, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  cartData = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getBookDetails() {
    return this.http.get('../assets/book-details.json')
    .pipe(
      pluck('items'),
      map((data: any) => (data)),
    );
  }
  updateCartList(item) {
this.cartData.next(item);
  }
  getUpdatedCartList(){
    return this.cartData.asObservable();
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
}
