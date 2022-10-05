import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderBringToLifeComponent } from './slider-bring-to-life.component';

describe('SliderBringToLifeComponent', () => {
  let component: SliderBringToLifeComponent;
  let fixture: ComponentFixture<SliderBringToLifeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SliderBringToLifeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBringToLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
