import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppLandingTwinPhoneRightListComponent } from './app-landing-twin-phone-right-list.component';

describe('AppLandingTwinPhoneRightListComponent', () => {
  let component: AppLandingTwinPhoneRightListComponent;
  let fixture: ComponentFixture<AppLandingTwinPhoneRightListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppLandingTwinPhoneRightListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingTwinPhoneRightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
