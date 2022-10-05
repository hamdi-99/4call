import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialWorldMapComponent } from './testimonial-world-map.component';

describe('TestimonialWorldMapComponent', () => {
  let component: TestimonialWorldMapComponent;
  let fixture: ComponentFixture<TestimonialWorldMapComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestimonialWorldMapComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialWorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
