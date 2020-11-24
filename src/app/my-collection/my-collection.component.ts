import { Component, OnInit } from "@angular/core";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";

@Component({
  selector: "app-my-collection",
  templateUrl: "./my-collection.component.html",
  styleUrls: ["./my-collection.component.scss"],
})
export class MyCollectionComponent implements OnInit {
  purchasedData: VolumeInfo;
  populateCartItem: VolumeInfo;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getPurchaseDetail();
  }
  getPurchaseDetail() {
    this.appService.getUpdatedMyCollectionList().subscribe((purchaseData) => {
      this.purchasedData = purchaseData;
    });
  }
}
