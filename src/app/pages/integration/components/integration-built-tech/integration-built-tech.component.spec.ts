import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrationBuiltTechComponent } from './integration-built-tech.component';

describe('IntegrationBuiltTechComponent', () => {
  let component: IntegrationBuiltTechComponent;
  let fixture: ComponentFixture<IntegrationBuiltTechComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntegrationBuiltTechComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationBuiltTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
