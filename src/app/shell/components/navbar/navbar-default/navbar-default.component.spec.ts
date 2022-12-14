import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarDefaultComponent } from './navbar-default.component';

describe('NavbarDefaultComponent', () => {
  let component: NavbarDefaultComponent;
  let fixture: ComponentFixture<NavbarDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarDefaultComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
