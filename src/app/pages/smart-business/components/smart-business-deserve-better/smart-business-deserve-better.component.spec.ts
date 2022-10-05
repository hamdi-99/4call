import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmartBusinessDeserveBetterComponent } from './smart-business-deserve-better.component';

describe('SmartBusinessDeserveBetterComponent', () => {
  let component: SmartBusinessDeserveBetterComponent;
  let fixture: ComponentFixture<SmartBusinessDeserveBetterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SmartBusinessDeserveBetterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBusinessDeserveBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
