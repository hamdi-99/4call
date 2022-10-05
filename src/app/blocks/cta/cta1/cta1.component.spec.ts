import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Cta1Component } from './cta1.component';

describe('Cta1Component', () => {
  let component: Cta1Component;
  let fixture: ComponentFixture<Cta1Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Cta1Component]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Cta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
