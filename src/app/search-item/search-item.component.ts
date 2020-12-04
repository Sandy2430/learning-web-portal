import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { BookList, VolumeInfo } from "../models/book-list.model";
import { BookListFacadeService } from "../store/book-list-facade.service";
import {
  loadSearchData,
  loadBookList,
  loadSpecificBook,
} from "../store/book-list.action";
import { BooksState } from "../store/book-list.reducer";
import { getBooks } from "../store/book-list.selector";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
  bookList$: Observable<BookList[]>;
  searchLibrary: string;

  constructor(private bookFacade: BookListFacadeService) {}

  ngOnInit() {}
  getSearchItem() {
    if (this.searchLibrary) {
      this.bookFacade.dispatch(
        loadSearchData({ searchItem: this.searchLibrary })
      );
      this.bookList$ = this.bookFacade.getBookList();
      this.bookFacade.dispatch(loadBookList());
    } else {
      alert("Search box is empty");
    }
  }

  openFullBookView(bookInfo: VolumeInfo) {
    this.bookFacade.dispatch(loadSpecificBook({ book: bookInfo }));
  }
}
