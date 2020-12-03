import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { BookList, VolumeInfo } from "../../models";
import { AppService } from "../../app.service";
import { AppState } from "src/app/reducers";
import {
  loadCartCount,
  loadBuyItem,
  addBookToCart,
} from "src/app/store/book-list.action";
// import { addBookToCart } from "src/app/store/book-list.action";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent implements OnInit {
  @Input() bookDetails: VolumeInfo;
  @Input() completeBookView: boolean;
  @Input() cartComponent: boolean;
  @Input() myCollection: boolean;
  @Input() bookArray: BookList[];

  bookInfo: VolumeInfo[];
  bookItem: VolumeInfo[] = [];
  bookItem1: VolumeInfo[] = [];
  constructor(
    private appService: AppService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}
  removeItem(bookArray, bookDetails) {
    bookArray = Object.assign([], bookArray);
    const index = bookArray.indexOf(bookDetails);
    bookArray.splice(index, 1);
    this.store.dispatch(loadCartCount({ cartCount: bookArray.length }));
    this.store.dispatch(addBookToCart({ cartData: bookArray }));
  }
  addToCart(addToCart) {
    this.bookItem = Object.assign([], this.bookItem);
    this.bookItem.push(addToCart);
    this.appService.addToCart(this.bookItem);
    this.store.dispatch(loadCartCount({ cartCount: this.bookItem.length }));
  }
  proceedToPurchase(bookDetails) {
    this.router.navigate(["/billing-details"]);
    this.store.dispatch(loadBuyItem({ buy: bookDetails }));
  }
}
