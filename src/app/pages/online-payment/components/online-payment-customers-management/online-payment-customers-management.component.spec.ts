import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnlinePaymentCustomersManagementComponent } from './online-payment-customers-management.component';

describe('OnlinePaymentCustomersManagementComponent', () => {
  let component: OnlinePaymentCustomersManagementComponent;
  let fixture: ComponentFixture<OnlinePaymentCustomersManagementComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlinePaymentCustomersManagementComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(
      OnlinePaymentCustomersManagementComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
