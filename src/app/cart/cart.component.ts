import { Component, OnInit } from "@angular/core";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  populateCartItem: VolumeInfo[] = [];
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.populateCartItem = JSON.parse(localStorage.getItem("cart-item"));
    this.appService.updateCartLength(this.populateCartItem.length);
  }
}
