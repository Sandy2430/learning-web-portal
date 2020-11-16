import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { OptionSectionComponent } from './option-section/option-section.component';
import { CartComponent } from './cart/cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { BillingDetailsPageComponent } from './billing-details-page/billing-details-page.component';
import { BookDetailComponent } from './search-item/book-detail/book-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { WebLibraryComponent } from './web-library.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
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
  declarations: [
    SearchItemComponent,
    OptionSectionComponent,
    CartComponent,
    MyCollectionComponent,
    BillingDetailsPageComponent,
    BookDetailComponent,
    WebLibraryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [WebLibraryComponent],
})
export class WebLibraryModule {}
