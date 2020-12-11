import { Component, Input, OnInit } from "@angular/core";

import { BookList, VolumeInfo } from "../../models";
import * as BookActions from "src/app/store/action/book-list.action";
import { BookListFacadeService } from "src/app/store/facade/book-list-facade.service";

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

  constructor(private bookFacade: BookListFacadeService) {}

  ngOnInit() {}

  removeItem(bookArray, bookDetails) {
    bookArray = Object.assign([], bookArray);
    const index = bookArray.indexOf(bookDetails);
    bookArray.splice(index, 1);
    this.bookFacade.dispatch(BookActions.addBookToCart({ cartData: bookArray }));
    this.bookFacade.dispatch(BookActions.loadCartCount({ cartCount: bookArray.length }));
  }

  addToCart(addToCart) {
    this.bookItem = Object.assign([], this.bookItem);
    this.bookItem.push(addToCart);
    this.bookFacade.dispatch(BookActions.addBookToCart({ cartData: this.bookItem }));
    this.bookFacade.dispatch(
      BookActions.loadCartCount({ cartCount: this.bookItem.length })
    );
  }

  proceedToPurchase(bookDetails) {
    this.bookFacade.dispatch(BookActions.loadBuyItem({ buy: bookDetails }));
  }
}
