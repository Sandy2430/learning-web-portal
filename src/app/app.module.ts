import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ModalModule } from "ngx-bootstrap/modal";
import { MatIconModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { SearchItemComponent } from "./search-item/search-item.component";
import { CartComponent } from "./cart/cart.component";
import { MyCollectionComponent } from "./my-collection/my-collection.component";
import { BillingDetailsPageComponent } from "./billing-details-page/billing-details-page.component";
import { BookDetailComponent } from "./shared/book-detail/book-detail.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CompleteBookReferenceComponent } from "./complete-book-reference/complete-book-reference.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    NavBarComponent,
    CartComponent,
    MyCollectionComponent,
    BillingDetailsPageComponent,
    BookDetailComponent,
    CompleteBookReferenceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatIconModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
