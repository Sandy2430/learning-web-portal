import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppService } from '../app.service';
import { BookList, VolumeInfo } from '../models/book-list.model';
import { User } from '../models/user';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  state$: Observable<object>;
  searchForm: FormGroup;
  bookList: BookList[];
  bookList$: Observable<BookList[]>;
  cartList$: Observable<VolumeInfo[]>;
  pageView = false;
  bookDetailedView: VolumeInfo;
  bookInfo: any = [];
  bookItem: any = [];
  searchLibrary: string;
  user: User[];
  imgUrl = '../../assets/image/';

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchLibrary: '',
    });
  }
  /* Search Click event */
  searchItem() {
    this.appService.updateSearchString(this.searchLibrary);
    this.appService.getBooks()
    .subscribe((books: any) => {
      console.log('books', books);
      this.bookList = books;
    });
  }
  sendBookArray(arr1, item){
console.log('array', arr1);
console.log('item', item);
  }
  openpage(data) {
    this.pageView = true;
    this.searchLibrary = '';
    this.bookDetailedView = data.volumeInfo;
  }
  addToCart(addToCart) {
    this.bookInfo = addToCart;
    this.bookItem.push(this.bookInfo);
    localStorage.setItem('cart-item', JSON.stringify(this.bookItem));
    this.appService.updateCartList(this.bookItem);
    this.appService.updateCartLength((JSON.parse(localStorage.getItem("cart-item"))).length);
  }
  purchaseDetail(bookInfo) {
    console.log('bookInfo', bookInfo);
    this.router.navigate(['/billing-details'], {
      queryParams: { data: JSON.stringify(bookInfo) },
    });
  }
  getUserData() {
    this.appService.getUser('/users').subscribe((res: any) => {
      this.user = res;
    });
  }
}
