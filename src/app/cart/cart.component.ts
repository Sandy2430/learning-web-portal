import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";
import { BooksState } from "../store/book-list.reducer";
import { getCartCount, getCartItem } from "../store/book-list.selector";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  populateCartItem: VolumeInfo[] = [];
  populateCartItem$: Observable<VolumeInfo[]>;
  cartCount: number;
  constructor(
    private appService: AppService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    
    this.populateCartItem$ = this.store.select(getCartItem);
    // this.store
    //   .select(getCartItem)
    //   .subscribe((res) => (this.populateCartItem = res));
    this.store.select(getCartCount).subscribe((count) => {
      this.cartCount = count;
    });
    // this.populateCartItem = JSON.parse(localStorage.getItem("cart-item"));
  }
}
