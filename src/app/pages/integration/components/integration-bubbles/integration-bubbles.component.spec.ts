import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrationBubblesComponent } from './integration-bubbles.component';

describe('IntegrationBubblesComponent', () => {
  let component: IntegrationBubblesComponent;
  let fixture: ComponentFixture<IntegrationBubblesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntegrationBubblesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
