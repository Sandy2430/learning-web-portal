import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingDetailsPageComponent } from './web-library/billing-details-page/billing-details-page.component';
import { CartComponent } from './web-library/cart/cart.component';
import { MyCollectionComponent } from './web-library/my-collection/my-collection.component';
import { SearchItemComponent } from './web-library/search-item/search-item.component';
const routes: Routes = [
  {
    path: '',
    component: SearchItemComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'my-collection',
    component: MyCollectionComponent,
  },
  {
    path: 'billing-details',
    component: BillingDetailsPageComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
