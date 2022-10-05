import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartupVideosComponent } from './startup-videos.component';

describe('StartupVideosComponent', () => {
  let component: StartupVideosComponent;
  let fixture: ComponentFixture<StartupVideosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StartupVideosComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
