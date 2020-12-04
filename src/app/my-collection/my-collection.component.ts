import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { VolumeInfo } from "../models";
import { BooksState } from "../store/book-list.reducer";
import { getPurchasedList } from "../store/book-list.selector";

@Component({
  selector: "app-my-collection",
  templateUrl: "./my-collection.component.html",
  styleUrls: ["./my-collection.component.scss"],
})
export class MyCollectionComponent implements OnInit {
  purchasedData: VolumeInfo[];
  purchasedData$: Observable<VolumeInfo[]>;
  populateCartItem: VolumeInfo;
  constructor(
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.purchasedData$ = this.store.select(getPurchasedList);
  }
}
