import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-billing-details-page',
  templateUrl: './billing-details-page.component.html',
  styleUrls: ['./billing-details-page.component.scss']
})
export class BillingDetailsPageComponent implements OnInit {
  billingForm: FormGroup;
  formValid = false;
  purchasedBook: any;
  purchaseDetail: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private appService: AppService ) { }

  ngOnInit() {
    this.initBillingForm();
    console.log('form',this.billingForm);
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
  title: this.purchasedBook.title,
  subtitle: this.purchasedBook.subtitle,
  publisher: this.purchasedBook.publisher,
  publishedDate: this.purchasedBook.publishedDate,
  description: this.purchasedBook.description,
  authors: this.purchasedBook.authors,
  imageLinks: this.purchasedBook.imageLinks.smallThumbnail
};
this.purchaseDetail.push(purchaseDetail);
this.appService.updateMyCollectionList(this.purchaseDetail);
this.router.navigate(['/my-collection']);
// console.log('purchaseDetail', purchaseDetail);
}
}
