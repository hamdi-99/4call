import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppLandingFeatureCardsComponent } from './app-landing-feature-cards.component';

describe('AppLandingFeatureCardsComponent', () => {
  let component: AppLandingFeatureCardsComponent;
  let fixture: ComponentFixture<AppLandingFeatureCardsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppLandingFeatureCardsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingFeatureCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
