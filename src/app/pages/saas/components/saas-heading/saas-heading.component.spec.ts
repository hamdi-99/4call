import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaasHeadingComponent } from './saas-heading.component';

describe('SaasHeadingComponent', () => {
  let component: SaasHeadingComponent;
  let fixture: ComponentFixture<SaasHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SaasHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
