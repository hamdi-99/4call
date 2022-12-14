import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScreenshotsAppComponent } from './screenshots-app.component';

describe('ScreenshotsAppComponent', () => {
  let component: ScreenshotsAppComponent;
  let fixture: ComponentFixture<ScreenshotsAppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ScreenshotsAppComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
