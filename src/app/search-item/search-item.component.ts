import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import * as BookModels from "../models";
import { BookListFacadeService } from "../store/facade/book-list-facade.service";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
  bookList$: Observable<BookModels.BookList[]>;
  searchLibrary: string;

  constructor(private bookFacade: BookListFacadeService) {}

  ngOnInit() {}
  getSearchItem() {
    this.bookFacade.loadSearchString(this.searchLibrary);
    this.bookList$ = this.bookFacade.getBookList();
    this.bookFacade.loadBookList();
  }

  openFullBookView(bookInfo: BookModels.VolumeInfo) {
    this.bookFacade.getSpecificBookInfo(bookInfo);
  }
}
