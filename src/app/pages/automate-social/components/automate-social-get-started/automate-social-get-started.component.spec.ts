import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutomateSocialGetStartedComponent } from './automate-social-get-started.component';

describe('AutomateSocialGetStartedComponent', () => {
  let component: AutomateSocialGetStartedComponent;
  let fixture: ComponentFixture<AutomateSocialGetStartedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AutomateSocialGetStartedComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateSocialGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
