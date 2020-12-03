import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppService } from "../app.service";
import { BookList, VolumeInfo } from "../models/book-list.model";
import {
  loadSearchData,
  loadBookList,
  loadBookListSuccess,
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

  constructor(
    private appService: AppService,
    private store: Store<BooksState>,
    private router: Router
  ) {}

  ngOnInit() {
  }

  searchItem() {
    this.store.dispatch(loadSearchData({ searchItem: this.searchLibrary }));
    this.bookList$ = this.store.select(getBooks);
    this.appService.getBooks().subscribe((data) => {
      this.store.dispatch(loadBookListSuccess({ bookListDetails: data }));
    });
  }
  openFullBookView(bookInfo: VolumeInfo) {
    this.router.navigate(["/full-book-view"]);
    this.store.dispatch(loadSpecificBook({ book: bookInfo }));
  }
}
