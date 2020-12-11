import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import * as BookModels from "../models";
import { BookListFacadeService } from "../store/facade/book-list-facade.service";
import * as BookActions from "../store/action/book-list.action";

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
    if (this.searchLibrary) {
      this.bookFacade.loadSearchString(this.searchLibrary);
      this.bookList$ = this.bookFacade.getBookList();
      this.bookFacade.loadBookList();
    } else {
      alert("Search box is empty");
    }
  }

  openFullBookView(bookInfo: BookModels.VolumeInfo) {
    this.bookFacade.getSpecificBookInfo(bookInfo);
  }
}
