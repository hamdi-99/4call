import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessSolutionsHeadingComponent } from './business-solutions-heading.component';

describe('BusinessSolutionsHeadingComponent', () => {
  let component: BusinessSolutionsHeadingComponent;
  let fixture: ComponentFixture<BusinessSolutionsHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessSolutionsHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSolutionsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
