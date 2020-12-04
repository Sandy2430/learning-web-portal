import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { VolumeInfo } from "../models";
import { BookListFacadeService } from "../store/book-list-facade.service";


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  populateCartItem$: Observable<VolumeInfo[]>;
  cartCount$: Observable<number>;
  constructor(
    private bookFacade: BookListFacadeService
  ) {}

  ngOnInit() {
    this.populateCartItem$ = this.bookFacade.getCartItems();
    this.cartCount$ = this.bookFacade.getCartLength();
  }
}
