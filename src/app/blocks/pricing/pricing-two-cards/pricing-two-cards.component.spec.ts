import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PricingTwoCardsComponent } from './pricing-two-cards.component';

describe('PricingTwoCardsComponent', () => {
  let component: PricingTwoCardsComponent;
  let fixture: ComponentFixture<PricingTwoCardsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PricingTwoCardsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTwoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
