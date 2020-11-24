import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookList, VolumeInfo } from "../models";

@Component({
  selector: "app-complete-book-reference",
  templateUrl: "./complete-book-reference.component.html",
  styleUrls: ["./complete-book-reference.component.scss"],
})
export class CompleteBookReferenceComponent implements OnInit {
  bookDetailedView: VolumeInfo;
  bookList: VolumeInfo;
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getFullBookDetails();
  }
  getFullBookDetails() {
    this.activateRoute.queryParams.subscribe((result: any) => {
      this.bookDetailedView = JSON.parse(result.data);
    });
  }
}
