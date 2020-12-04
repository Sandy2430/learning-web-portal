import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { BookListFacadeService } from "../store/book-list-facade.service";


@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  cartLength$: Observable<number>;
  collectionLength$: Observable<number>;
  constructor(
    private bookFacade: BookListFacadeService,
  ) {}

  ngOnInit() {
    this.cartLength$ = this.bookFacade.getCartLength();
    this.collectionLength$ = this.bookFacade.getMyCollectionLength();
  }
}
