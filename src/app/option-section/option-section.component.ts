import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-option-section',
  templateUrl: './option-section.component.html',
  styleUrls: ['./option-section.component.scss']
})
export class OptionSectionComponent implements OnInit {
  cartLength: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUpdatedCartList().subscribe(data => {
      if (data) {
        this.cartLength = data.length;
      } else {
        this.cartLength = this.appService.getCartLength();
      }
    });
  }

}
