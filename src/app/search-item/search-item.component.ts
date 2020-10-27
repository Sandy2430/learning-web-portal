import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  searchForm: FormGroup;
  bookList: any[] = [];
  bookList1: any[] = [];
  pageView = false;
  bookDetailedView: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
    ) {}

  ngOnInit() {
    this.initSearchForm();
    this.searchItem();
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchLibrary: '',
    });
  }
searchItem() {
  this.appService.getBookDetails()
    .subscribe(
      (result: any) => {
        this.bookList = result;
        console.log('result', this.bookList);
      }
    );
}
openpage(data){
  this.pageView = true;
  this.bookDetailedView = data;
  console.log(data);

}
}
