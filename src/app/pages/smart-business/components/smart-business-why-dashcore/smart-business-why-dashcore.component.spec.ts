import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmartBusinessWhyDashcoreComponent } from './smart-business-why-dashcore.component';

describe('SmartBusinessWhyDashcoreComponent', () => {
  let component: SmartBusinessWhyDashcoreComponent;
  let fixture: ComponentFixture<SmartBusinessWhyDashcoreComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SmartBusinessWhyDashcoreComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBusinessWhyDashcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
