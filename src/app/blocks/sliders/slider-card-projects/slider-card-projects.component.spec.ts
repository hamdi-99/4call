import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderCardProjectsComponent } from './slider-card-projects.component';

describe('SliderCardProjectsComponent', () => {
  let component: SliderCardProjectsComponent;
  let fixture: ComponentFixture<SliderCardProjectsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SliderCardProjectsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
