import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRptComponent } from './driver-rpt.component';

describe('DriverRptComponent', () => {
  let component: DriverRptComponent;
  let fixture: ComponentFixture<DriverRptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverRptComponent]
    });
    fixture = TestBed.createComponent(DriverRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
