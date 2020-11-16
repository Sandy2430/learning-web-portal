import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() bookDetails: any;
  @Input() cartComponent: boolean;
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
