import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaasPerspectiveMockupsComponent } from './saas-perspective-mockups.component';

describe('SaasPerspectiveMockupsComponent', () => {
  let component: SaasPerspectiveMockupsComponent;
  let fixture: ComponentFixture<SaasPerspectiveMockupsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SaasPerspectiveMockupsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasPerspectiveMockupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
