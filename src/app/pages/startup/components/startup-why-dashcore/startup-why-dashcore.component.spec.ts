import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartupWhyDashcoreComponent } from './startup-why-dashcore.component';

describe('StartupWhyDashcoreComponent', () => {
  let component: StartupWhyDashcoreComponent;
  let fixture: ComponentFixture<StartupWhyDashcoreComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StartupWhyDashcoreComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupWhyDashcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
