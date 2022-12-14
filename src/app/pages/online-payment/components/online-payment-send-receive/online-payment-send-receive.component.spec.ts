import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnlinePaymentSendReceiveComponent } from './online-payment-send-receive.component';

describe('OnlinePaymentSendReceiveComponent', () => {
  let component: OnlinePaymentSendReceiveComponent;
  let fixture: ComponentFixture<OnlinePaymentSendReceiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlinePaymentSendReceiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentSendReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
