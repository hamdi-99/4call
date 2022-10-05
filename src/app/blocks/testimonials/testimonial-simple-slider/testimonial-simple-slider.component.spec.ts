import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialSimpleSliderComponent } from './testimonial-simple-slider.component';

describe('TestimonialSimpleSliderComponent', () => {
  let component: TestimonialSimpleSliderComponent;
  let fixture: ComponentFixture<TestimonialSimpleSliderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialSimpleSliderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
