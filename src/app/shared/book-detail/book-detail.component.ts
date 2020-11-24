import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BookList, VolumeInfo } from "../../models";
import { AppService } from "../../app.service";

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
  JSON; // @JSON has been defined to overcome JSON.Stringfy undefined error,
  // which declared in template file.
  bookInfo: VolumeInfo[] = [];
  bookItem: VolumeInfo[] = [];
  constructor(private appService: AppService, private router: Router) {
    this.JSON = JSON;
  }

  ngOnInit() {}
  removeItem(bookArray, bookDetails) {
    const index = bookArray.indexOf(bookDetails);
    if (index > -1) {
      bookArray.splice(index, 1);
      this.appService.updateCartLength(bookArray.length);
      localStorage.setItem("cart-item", JSON.stringify(bookArray));
      this.appService.getUpdatedCartLength().subscribe((cartLength) => {
        if (cartLength === 0) {
          this.router.navigate(["/learning-web-portal"]);
        }
      });
    }
    this.appService.updateCartList(null);
  }
  addToCart(addToCart) {
    this.bookItem.push(addToCart);
    localStorage.setItem("cart-item", JSON.stringify(this.bookItem));
    this.appService.updateCartList(this.bookItem);
    this.appService.updateCartLength(
      JSON.parse(localStorage.getItem("cart-item")).length
    );
  }
}
