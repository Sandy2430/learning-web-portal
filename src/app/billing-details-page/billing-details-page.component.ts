import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";

import { VolumeInfo } from "../models";
import { BookListFacadeService } from "../store/facade/book-list-facade.service";

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
  proceedToBuy$: Observable<VolumeInfo>;
  constructor(
    public fb: FormBuilder,
    public modalService: BsModalService,
    public bookFacade: BookListFacadeService
  ) {}

  ngOnInit() {
    this.proceedToBuy$ = this.bookFacade.getProceedToBuyInfo();
    this.proceedToBuy$.subscribe((data) => (this.proceedToBuy = data));
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
    console.log("template", template);
    this.bookFacade.loadPurchaseItem([
      {
        userName: formData.userName,
        userEmail: formData.userEmail,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        ...this.proceedToBuy,
      },
    ]);
    this.bookFacade.loadBookPurchasedCount(
      [
        {
          userName: formData.userName,
          userEmail: formData.userEmail,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          ...this.proceedToBuy,
        },
      ].length
    );
  }
}
