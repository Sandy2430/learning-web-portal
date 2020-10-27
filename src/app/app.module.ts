import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchItemComponent } from './search-item/search-item.component';
import { OptionSectionComponent } from './option-section/option-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { BillingDetailsPageComponent } from './billing-details-page/billing-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    OptionSectionComponent,
    CartComponent,
    MyCollectionComponent,
    BillingDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
