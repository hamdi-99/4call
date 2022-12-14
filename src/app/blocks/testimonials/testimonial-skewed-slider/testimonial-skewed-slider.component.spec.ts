import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialSkewedSliderComponent } from './testimonial-skewed-slider.component';

describe('TestimonialSkewedSliderComponent', () => {
  let component: TestimonialSkewedSliderComponent;
  let fixture: ComponentFixture<TestimonialSkewedSliderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialSkewedSliderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSkewedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
