import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCustomersComponent } from './about-customers.component';

describe('AboutCustomersComponent', () => {
  let component: AboutCustomersComponent;
  let fixture: ComponentFixture<AboutCustomersComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutCustomersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
