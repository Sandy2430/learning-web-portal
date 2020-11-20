import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolumeInfo } from '../models';

@Component({
  selector: 'app-complete-book-reference',
  templateUrl: './complete-book-reference.component.html',
  styleUrls: ['./complete-book-reference.component.scss']
})
export class CompleteBookReferenceComponent implements OnInit {
  bookDetailedView: VolumeInfo;
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(
      (result: any) => {
      this.bookDetailedView = JSON.parse( result.data);
      }
    );
  }

}
