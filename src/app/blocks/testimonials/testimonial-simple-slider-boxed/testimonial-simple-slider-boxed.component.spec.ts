import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialSimpleSliderBoxedComponent } from './testimonial-simple-slider-boxed.component';

describe('TestimonialSimpleSliderBoxedComponent', () => {
  let component: TestimonialSimpleSliderBoxedComponent;
  let fixture: ComponentFixture<TestimonialSimpleSliderBoxedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialSimpleSliderBoxedComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleSliderBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
