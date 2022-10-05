import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderLogosComponent } from './slider-logos.component';

describe('SliderLogosComponent', () => {
  let component: SliderLogosComponent;
  let fixture: ComponentFixture<SliderLogosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SliderLogosComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
