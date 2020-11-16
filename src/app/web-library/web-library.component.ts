import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-web-library',
  templateUrl: './web-library.component.html',
  styleUrls: ['./web-library.component.scss']
})
export class WebLibraryComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
