import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigScreenComponent } from './big-screen.component';

describe('BigScreenComponent', () => {
  let component: BigScreenComponent;
  let fixture: ComponentFixture<BigScreenComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BigScreenComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
