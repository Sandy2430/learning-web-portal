import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartListItem: any;
  populateCartItem: any[] = [];
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    this.populateCartItem = JSON.parse(localStorage.getItem('cart-item'));
    this.appService.updateCartLength(this.populateCartItem.length);
    }
  // removeItem(bookArray, specificItem) {
  //   const index = bookArray.indexOf(specificItem);
  //   if (index > -1) {
  //     bookArray.splice(index, 1);
  //     this.appService.updateCartLength(bookArray.length);
  //     localStorage.setItem('cart-item', JSON.stringify(bookArray));
  //     this.appService.getUpdatedCartLength().subscribe(
  //       cartLength => {
  //         if (cartLength === 0) {
  //           this.router.navigate(['/learning-web-portal']);
  //         }
  //       }
  //     );
  //   }
  //   this.appService.updateCartList(null);
  // }
  // checkLength(bookInfo) {
  //   this.router.navigate(['/billing-details'], {
  //     queryParams: { data: JSON.stringify(bookInfo) },
  //   });
  // }
}
