import { Component, OnInit } from "@angular/core";

import { AppService } from "../app.service";
import { BookList, VolumeInfo } from "../models/book-list.model";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
  JSON; // @JSON has been defined to overcome JSON.Stringfy undefined error,
        // which declared in template file.
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
      this.appService.getBooks(searchItem).subscribe((books: BookList[]) => {
        this.bookList = books;
      });
    } else {
      alert("Please Enter search item in search box");
    }
  }
}
