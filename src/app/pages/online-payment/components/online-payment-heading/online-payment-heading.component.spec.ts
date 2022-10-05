import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnlinePaymentHeadingComponent } from './online-payment-heading.component';

describe('OnlinePaymentHeadingComponent', () => {
  let component: OnlinePaymentHeadingComponent;
  let fixture: ComponentFixture<OnlinePaymentHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlinePaymentHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
