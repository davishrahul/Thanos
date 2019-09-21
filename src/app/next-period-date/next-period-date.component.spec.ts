import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPeriodDateComponent } from './next-period-date.component';

describe('NextPeriodDateComponent', () => {
  let component: NextPeriodDateComponent;
  let fixture: ComponentFixture<NextPeriodDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPeriodDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPeriodDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
