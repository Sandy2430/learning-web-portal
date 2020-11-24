import { Component, OnInit } from "@angular/core";

import { AppService } from "../app.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  cartLength: number;
  myCollectionLength: number;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getUpdatedCartLength().subscribe((res) => {
      this.cartLength = res;
    });
    this.appService.getUpdatedMyCollectionList().subscribe((data) => {
      if (data) {
        this.myCollectionLength = data.length;
      } else {
        this.myCollectionLength = this.appService.getMyCollectionLength();
      }
    });
  }
}
