import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Counter5Component } from './counter5.component';

describe('Counter5Component', () => {
  let component: Counter5Component;
  let fixture: ComponentFixture<Counter5Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Counter5Component]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
