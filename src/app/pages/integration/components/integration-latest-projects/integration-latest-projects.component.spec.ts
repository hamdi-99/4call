import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrationLatestProjectsComponent } from './integration-latest-projects.component';

describe('IntegrationLatestProjectsComponent', () => {
  let component: IntegrationLatestProjectsComponent;
  let fixture: ComponentFixture<IntegrationLatestProjectsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntegrationLatestProjectsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationLatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
