import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderTools4SuccessComponent } from './slider-tools4-success.component';

describe('SliderTools4SuccessComponent', () => {
  let component: SliderTools4SuccessComponent;
  let fixture: ComponentFixture<SliderTools4SuccessComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SliderTools4SuccessComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTools4SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
