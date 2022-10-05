import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartupFeaturesComponent } from './startup-features.component';

describe('StartupFeaturesComponent', () => {
  let component: StartupFeaturesComponent;
  let fixture: ComponentFixture<StartupFeaturesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StartupFeaturesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
