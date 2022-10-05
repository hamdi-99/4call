import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialsSliderComponent } from './testimonials-slider.component';

describe('TestimonialsSliderComponent', () => {
  let component: TestimonialsSliderComponent;
  let fixture: ComponentFixture<TestimonialsSliderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialsSliderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
