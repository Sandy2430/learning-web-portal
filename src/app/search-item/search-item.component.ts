import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { BookList, VolumeInfo } from '../models/book-list.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  JSON;
  bookList: BookList[];
  bookDetailedView: VolumeInfo;
  searchLibrary: string;

  constructor(private appService: AppService) {
    this.JSON = JSON;
  }

  ngOnInit() {}

  /* Search Click event */
  searchItem(searchItem) {
    if (searchItem) {
      this.appService.getBooks(searchItem).subscribe((books: any) => {
        this.bookList = books;
      });
    } else {
      alert('Please Enter search item in search box');
    }
  }
}
