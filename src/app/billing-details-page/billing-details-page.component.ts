import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";
import { BooksState } from "../store/book-list.reducer";
import { loadPurchaseItem } from "../store/book-list.action";
import { getProceedToBuy } from "../store/book-list.selector";

@Component({
  selector: "app-billing-details-page",
  templateUrl: "./billing-details-page.component.html",
  styleUrls: ["./billing-details-page.component.scss"],
})
export class BillingDetailsPageComponent implements OnInit {
  modalRef: BsModalRef;
  billingForm: FormGroup;
  formValid = false;
  purchasedBook: VolumeInfo;
  proceedToBuy: VolumeInfo;
  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private appService: AppService,
    private modalService: BsModalService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.store
      .select(getProceedToBuy)
      .subscribe((data) => (this.proceedToBuy = data));
    this.initBillingForm();
    // this.activedRoute.queryParams.subscribe((res: any) => {
    //   this.purchasedBook = JSON.parse(res.data);
    // });
  }
  initBillingForm() {
    this.billingForm = this.fb.group({
      userName: ["", Validators.required],
      userEmail: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      address: ["", Validators.required],
    });
  }
  billingDetails(template: TemplateRef<any>, formData) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-sm" })
    );
    const purchasedBookInfo = {
      userName: formData.userName,
      userEmail: formData.userEmail,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      ...this.proceedToBuy,
    };
    this.store.dispatch(
      loadPurchaseItem({ purchaseList: [purchasedBookInfo] })
    );
    this.appService.updateMyCollectionList([purchasedBookInfo]);
  }
}
