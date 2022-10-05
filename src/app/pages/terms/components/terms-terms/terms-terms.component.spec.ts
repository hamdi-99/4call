import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TermsTermsComponent } from './terms-terms.component';

describe('TermsTermsComponent', () => {
  let component: TermsTermsComponent;
  let fixture: ComponentFixture<TermsTermsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TermsTermsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
