import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnlinePaymentFeaturesComponent } from './online-payment-features.component';

describe('OnlinePaymentFeaturesComponent', () => {
  let component: OnlinePaymentFeaturesComponent;
  let fixture: ComponentFixture<OnlinePaymentFeaturesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlinePaymentFeaturesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
