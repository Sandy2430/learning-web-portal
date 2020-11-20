import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteBookReferenceComponent } from './complete-book-reference.component';

describe('CompleteBookReferenceComponent', () => {
  let component: CompleteBookReferenceComponent;
  let fixture: ComponentFixture<CompleteBookReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteBookReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteBookReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
