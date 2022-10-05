import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FaqsAccordionComponent } from './faqs-accordion.component';

describe('FaqsAccordionComponent', () => {
  let component: FaqsAccordionComponent;
  let fixture: ComponentFixture<FaqsAccordionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FaqsAccordionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
