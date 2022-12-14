import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopersHeadingComponent } from './developers-heading.component';

describe('DevelopersHeadingComponent', () => {
  let component: DevelopersHeadingComponent;
  let fixture: ComponentFixture<DevelopersHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DevelopersHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
