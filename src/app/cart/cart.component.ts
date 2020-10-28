import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartListItem: any[] = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUpdatedCartList()
    .subscribe((data) => {
      this.cartListItem = data;
      });
  }
  removeItem(){
    this.cartListItem = [];
    this.appService.updateCartList(null);
    // this.appService.getCartLength();
  }
  checkLength() {
    this.appService.getCartLength();
    console.log('check length', this.appService.getCartLength());
  }
}
