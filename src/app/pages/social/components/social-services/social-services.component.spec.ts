import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialServicesComponent } from './social-services.component';

describe('SocialServicesComponent', () => {
  let component: SocialServicesComponent;
  let fixture: ComponentFixture<SocialServicesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SocialServicesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
