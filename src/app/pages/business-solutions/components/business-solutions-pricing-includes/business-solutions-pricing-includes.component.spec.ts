import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessSolutionsPricingIncludesComponent } from './business-solutions-pricing-includes.component';

describe('BusinessSolutionsPricingIncludesComponent', () => {
  let component: BusinessSolutionsPricingIncludesComponent;
  let fixture: ComponentFixture<BusinessSolutionsPricingIncludesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessSolutionsPricingIncludesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(
      BusinessSolutionsPricingIncludesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
