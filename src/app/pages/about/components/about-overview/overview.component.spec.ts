import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutOverviewComponent } from './about-overview.component';

describe('AboutOverviewComponent', () => {
  let component: AboutOverviewComponent;
  let fixture: ComponentFixture<AboutOverviewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutOverviewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
