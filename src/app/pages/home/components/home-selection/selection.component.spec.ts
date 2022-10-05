import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeSelectionComponent } from './home-selection.component';

describe('HomeSelectionComponent', () => {
  let component: HomeSelectionComponent;
  let fixture: ComponentFixture<HomeSelectionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeSelectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
