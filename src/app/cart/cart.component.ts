import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartListItem: any;
  populateCartItem: any[] = [];
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.populateCartItem = JSON.parse(localStorage.getItem('cart-item'));
    this.appService.updateCartLength(this.populateCartItem.length);
    }
}
