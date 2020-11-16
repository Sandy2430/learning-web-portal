import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppService } from '../../app.service';
import { BookList, VolumeInfo } from '../models/book-list.model';
import { User } from '../models/user';

import * as fromStore from '../store';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  state$: Observable<object>;
  searchForm: FormGroup;
  bookList: BookList[];
  bookList$: Observable<VolumeInfo[]>;
  cartList$: Observable<VolumeInfo[]>;
  bookList1: any[] = [];
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
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStore.ProductsState>
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
    this.bookList$ = this.store.select<any>(fromStore.getAllBooks);
    this.store.dispatch(new fromStore.LoadBooksAction());
  }
  /* Manual trigger event for testing purpose*/
  _searchItem() {
    const searchItem = 'angular';
    console.log(searchItem);
    this.appService.getBooks().subscribe((result) => {
      this.bookList = result;
      console.log('this.bookList', this.bookList);
    });
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
