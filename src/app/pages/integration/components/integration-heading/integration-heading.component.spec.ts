import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrationHeadingComponent } from './integration-heading.component';

describe('IntegrationHeadingComponent', () => {
  let component: IntegrationHeadingComponent;
  let fixture: ComponentFixture<IntegrationHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntegrationHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
