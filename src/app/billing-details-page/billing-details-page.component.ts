import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';
import { VolumeInfo } from '../models';

@Component({
  selector: 'app-billing-details-page',
  templateUrl: './billing-details-page.component.html',
  styleUrls: ['./billing-details-page.component.scss']
})
export class BillingDetailsPageComponent implements OnInit {
  billingForm: FormGroup;
  formValid = false;
  purchasedBook: VolumeInfo;
  purchaseDetail: VolumeInfo[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private appService: AppService ) { }

  ngOnInit() {
    this.initBillingForm();
    this.activedRoute.queryParams.subscribe((res: any) => {
      this.purchasedBook = JSON.parse(res.data);
    });
  }
initBillingForm() {
  this.billingForm = this.fb.group({
userName: ['', Validators.required],
userEmail: ['', Validators.required],
phoneNumber: ['', Validators.required],
address: ['', Validators.required],

  });
}
billingDetails(formData) {
const purchaseDetail = {
  userName: formData.userName,
  userEmail: formData.userEmail,
  phoneNumber: formData.phoneNumber,
  address: formData.address,
  ...this.purchasedBook
};

this.purchaseDetail.push(purchaseDetail);
this.appService.updateMyCollectionList(this.purchaseDetail);
this.router.navigate(['/my-collection']);
}
}
