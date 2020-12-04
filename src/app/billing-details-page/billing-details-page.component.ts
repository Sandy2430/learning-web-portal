import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { VolumeInfo } from "../models";
import { BooksState } from "../store/book-list.reducer";
import {
  loadPurchaseItem,
  loadBookPurchasedCount,
} from "../store/book-list.action";
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
    private modalService: BsModalService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.store
      .select(getProceedToBuy)
      .subscribe((data) => (this.proceedToBuy = data));
    this.initBillingForm();
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
    this.store.dispatch(
      loadBookPurchasedCount({ purchasedCount: [purchasedBookInfo].length })
    );
  }
}
