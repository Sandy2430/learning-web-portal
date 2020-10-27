import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck, tap, map, toArray, concatAll, concatMap, mergeAll, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBookDetails() {
    return this.http.get('../assets/book-details.json')
    .pipe(
      pluck('items'),
      map((data: any) => (data)),
    );
  }
}
