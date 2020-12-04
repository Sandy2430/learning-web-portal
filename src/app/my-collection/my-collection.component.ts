import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { VolumeInfo } from "../models";
import { BookListFacadeService } from "../store/book-list-facade.service";

@Component({
  selector: "app-my-collection",
  templateUrl: "./my-collection.component.html",
  styleUrls: ["./my-collection.component.scss"],
})
export class MyCollectionComponent implements OnInit {
  purchasedData$: Observable<VolumeInfo[]>;
  constructor(private bookFacade: BookListFacadeService) {}

  ngOnInit() {
    this.purchasedData$ = this.bookFacade.getPurchasedData();
  }
}
