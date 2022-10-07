import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsLegalsComponent } from './legals-legals.component';

describe('LegalsLegalsComponent', () => {
  let component: LegalsLegalsComponent;
  let fixture: ComponentFixture<LegalsLegalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalsLegalsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalsLegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
