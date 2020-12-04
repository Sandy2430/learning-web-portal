import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { BooksState } from "../store/book-list.reducer";
import { getCartCount, getCollectionCount } from "../store/book-list.selector";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  cartLength: number;
  cartLength$: Observable<number>;
  collectionLength$: Observable<number>;
  myCollectionLength: number;
  constructor(
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.cartLength$ = this.store.select(getCartCount);
    this.collectionLength$ = this.store.select(getCollectionCount);
  }
}
