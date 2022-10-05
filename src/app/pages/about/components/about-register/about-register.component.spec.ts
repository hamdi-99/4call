import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutRegisterComponent } from './about-register.component';

describe('AboutRegisterComponent', () => {
  let component: AboutRegisterComponent;
  let fixture: ComponentFixture<AboutRegisterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutRegisterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
