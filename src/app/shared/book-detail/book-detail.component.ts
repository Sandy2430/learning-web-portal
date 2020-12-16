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

  constructor(public bookFacade: BookListFacadeService) {}

  ngOnInit() {}

  removeItem(bookList, singleBook) {
    bookList = Object.assign([], bookList);
    const index = bookList.indexOf(singleBook);
    bookList.splice(index, 1);
    this.bookFacade.addToCart(bookList);
    this.bookFacade.getCartCount(bookList.length);
  }

  addToCart() {
    this.bookItem = Object.assign([], this.bookItem);
    this.bookItem.push(this.bookDetails);
    this.bookFacade.addToCart(this.bookItem);
    this.bookFacade.getCartCount(this.bookItem.length);
  }

  proceedToPurchasePage() {
    this.bookFacade.proceedToPurchase(this.bookDetails);
  }
}
