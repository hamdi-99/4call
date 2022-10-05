import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrustUsComponent } from './trust-us.component';

describe('TrustUsComponent', () => {
  let component: TrustUsComponent;
  let fixture: ComponentFixture<TrustUsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TrustUsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
