import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopersIntegrationComponent } from './developers-integration.component';

describe('DevelopersIntegrationComponent', () => {
  let component: DevelopersIntegrationComponent;
  let fixture: ComponentFixture<DevelopersIntegrationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DevelopersIntegrationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
