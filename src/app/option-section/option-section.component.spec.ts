import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSectionComponent } from './option-section.component';

describe('OptionSectionComponent', () => {
  let component: OptionSectionComponent;
  let fixture: ComponentFixture<OptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
