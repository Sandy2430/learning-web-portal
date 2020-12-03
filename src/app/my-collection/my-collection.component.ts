import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";
import { BooksState } from "../store/book-list.reducer";
import { getPurchasedList } from "../store/book-list.selector";
// import { getBookPurchasedData } from "../store/book-list.action";

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
    private appService: AppService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    // this.getPurchaseDetail();
    this.purchasedData$ = this.store.select(getPurchasedList);
  }
  getPurchaseDetail() {
    this.appService.getUpdatedMyCollectionList().subscribe((purchaseData) => {
      // this.store.dispatch(getBookPurchasedData(purchaseData));
      this.purchasedData = purchaseData;
    });
  }
}
