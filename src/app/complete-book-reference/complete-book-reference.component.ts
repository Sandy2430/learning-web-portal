import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { VolumeInfo } from "../models";
import { AppState } from "../reducers";

import { getSelectedBook } from "../store/book-list.selector";

@Component({
  selector: "app-complete-book-reference",
  templateUrl: "./complete-book-reference.component.html",
  styleUrls: ["./complete-book-reference.component.scss"],
})
export class CompleteBookReferenceComponent implements OnInit {
  bookDetailedView: VolumeInfo;
  bookList: any;
  bookDetailedView$: Observable<VolumeInfo>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.bookDetailedView$ = this.store.select(getSelectedBook);
  }
}
