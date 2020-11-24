import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { AppService } from "../app.service";
import { VolumeInfo } from "../models";

@Component({
  selector: "app-billing-details-page",
  templateUrl: "./billing-details-page.component.html",
  styleUrls: ["./billing-details-page.component.scss"],
})
export class BillingDetailsPageComponent implements OnInit {
  JSON;
  modalRef: BsModalRef;
  billingForm: FormGroup;
  formValid = false;
  purchasedBook: VolumeInfo;
  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private appService: AppService,
    private modalService: BsModalService
  ) {
    this.JSON = JSON;
  }

  ngOnInit() {
    this.initBillingForm();
    this.activedRoute.queryParams.subscribe((res: any) => {
      this.purchasedBook = JSON.parse(res.data);
    });
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
    this.appService.updateMyCollectionList({
      userName: formData.userName,
      userEmail: formData.userEmail,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      ...this.purchasedBook,
    });
  }
}
