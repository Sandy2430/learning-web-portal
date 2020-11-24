import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BillingDetailsPageComponent } from "./billing-details-page/billing-details-page.component";
import { CartComponent } from "./cart/cart.component";
import { CompleteBookReferenceComponent } from "./complete-book-reference/complete-book-reference.component";
import { MyCollectionComponent } from "./my-collection/my-collection.component";
import { SearchItemComponent } from "./search-item/search-item.component";
const routes: Routes = [
  {
    path: "learning-web-portal",
    component: SearchItemComponent,
  },
  {
    path: "full-book-view",
    component: CompleteBookReferenceComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "my-collection",
    component: MyCollectionComponent,
  },
  {
    path: "billing-details",
    component: BillingDetailsPageComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
