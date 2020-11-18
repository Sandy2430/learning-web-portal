import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookList, VolumeInfo } from '../../models';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() bookDetails: VolumeInfo;
  @Input() cartComponent: boolean;
  @Input() myCollection: boolean;
  @Input() bookArray: BookList[];
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('bookDetails',this.bookDetails);
    // console.log('bookArray', this.bookArray);
  }
  removeItem(bookArray, bookDetails) {
    const index = bookArray.indexOf(bookDetails);
    if (index > -1) {
      bookArray.splice(index, 1);
      this.appService.updateCartLength(bookArray.length);
      localStorage.setItem('cart-item', JSON.stringify(bookArray));
      this.appService.getUpdatedCartLength().subscribe(
        cartLength => {
          if (cartLength === 0) {
            this.router.navigate(['/learning-web-portal']);
          }
        }
      );
    }
    this.appService.updateCartList(null);
  }

  billingInfoPage(bookDetails) {
    
    console.log('bookDetails', bookDetails)
    this.router.navigate(['/billing-details'],
    {queryParams: { data: JSON.stringify(bookDetails) }});
  }
}
