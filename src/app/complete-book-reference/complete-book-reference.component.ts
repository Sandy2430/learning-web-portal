import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { VolumeInfo } from "../models";
import { BookListFacadeService } from "../store/facade/book-list-facade.service";


@Component({
  selector: "app-complete-book-reference",
  templateUrl: "./complete-book-reference.component.html",
  styleUrls: ["./complete-book-reference.component.scss"],
})
export class CompleteBookReferenceComponent implements OnInit {
  bookDetailedView: VolumeInfo;
  bookList: any;
  bookDetailedView$: Observable<VolumeInfo>;

  constructor(private bookFacade: BookListFacadeService) {}

  ngOnInit() {
    this.bookDetailedView$ = this.bookFacade.getCompleteBookInfo();
  }
}
