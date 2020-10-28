import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  searchForm: FormGroup;
  bookList: any[] = [];
  bookList1: any[] = [];
  pageView = false;
  bookDetailedView: any = [];
  bookInfo: any = [];
  searchLibrary: string;
  imgUrl = '../../assets/image/';

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
    ) {}

  ngOnInit() {
    this.searchItem();
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchLibrary: '',
    });
  }
searchItem() {
  this.appService.getBookDetails()
    .subscribe(
      (result: any) => {
        this.bookList = result;
      }
    );
}
openpage(data) {
  this.pageView = true;
  this.searchLibrary = '';
  this.bookDetailedView = data;
}
addToCart(addToCart) {
  this.bookInfo.push({
    authors: addToCart.volumeInfo.authors,
    description: addToCart.volumeInfo.description,
    publishedDate: addToCart.volumeInfo.publishedDate,
    publisher: addToCart.volumeInfo.publisher,
    subtitle: addToCart.volumeInfo.subtitle,
    title: addToCart.volumeInfo.title,
  });
  const sa = [{
    authors: addToCart.volumeInfo.authors,
    description: addToCart.volumeInfo.description,
    publishedDate: addToCart.volumeInfo.publishedDate,
    publisher: addToCart.volumeInfo.publisher,
    subtitle: addToCart.volumeInfo.subtitle,
    title: addToCart.volumeInfo.title,
  }];
  // console.log(this.bookInfo);
  this.appService.updateCartList(this.bookInfo);
}
}
