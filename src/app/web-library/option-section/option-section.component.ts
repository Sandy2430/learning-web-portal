import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-option-section',
  templateUrl: './option-section.component.html',
  styleUrls: ['./option-section.component.scss'],
})
export class OptionSectionComponent implements OnInit {
  cartLength: any;
  myCollectionLength: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
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
