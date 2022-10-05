import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrationWhyChooseUsComponent } from './integration-why-choose-us.component';

describe('IntegrationWhyChooseUsComponent', () => {
  let component: IntegrationWhyChooseUsComponent;
  let fixture: ComponentFixture<IntegrationWhyChooseUsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntegrationWhyChooseUsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
