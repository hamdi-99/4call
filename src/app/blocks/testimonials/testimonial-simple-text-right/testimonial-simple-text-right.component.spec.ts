import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialSimpleTextRightComponent } from './testimonial-simple-text-right.component';

describe('TestimonialSimpleTextRightComponent', () => {
  let component: TestimonialSimpleTextRightComponent;
  let fixture: ComponentFixture<TestimonialSimpleTextRightComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialSimpleTextRightComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleTextRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
