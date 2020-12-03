import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppService } from "../app.service";
import { BooksState } from "../store/book-list.reducer";
import { getCartCount } from "../store/book-list.selector";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  cartLength: number;
  cartLength$: Observable<number>;
  myCollectionLength: number;
  constructor(
    private appService: AppService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.cartLength$ = this.store.select(getCartCount);
    this.appService.getUpdatedCartLength().subscribe((res) => {
      this.cartLength = res;
    });
    this.appService.getUpdatedMyCollectionList().subscribe((data) => {
      if (data) {
        this.myCollectionLength = data.length;
      } else {
        this.myCollectionLength = this.appService.getMyCollectionLength();
      }
    });
  }
}
