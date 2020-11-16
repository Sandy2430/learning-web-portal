import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent implements OnInit {
  purchasedData: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getPurchaseDetail();
  }
  getPurchaseDetail() {
    this.appService.getUpdatedMyCollectionList().subscribe((purchaseData) => {
      this.purchasedData = purchaseData;
      console.log('this.purchasedData', this.purchasedData);
    });
  }
}
