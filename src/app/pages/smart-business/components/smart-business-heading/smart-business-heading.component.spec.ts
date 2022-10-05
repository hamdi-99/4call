import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmartBusinessHeadingComponent } from './smart-business-heading.component';

describe('SmartBusinessHeadingComponent', () => {
  let component: SmartBusinessHeadingComponent;
  let fixture: ComponentFixture<SmartBusinessHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SmartBusinessHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBusinessHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
