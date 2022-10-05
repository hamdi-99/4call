import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessSolutionsStartBusinessComponent } from './business-solutions-start-business.component';

describe('BusinessSolutionsStartBusinessComponent', () => {
  let component: BusinessSolutionsStartBusinessComponent;
  let fixture: ComponentFixture<BusinessSolutionsStartBusinessComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessSolutionsStartBusinessComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSolutionsStartBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
