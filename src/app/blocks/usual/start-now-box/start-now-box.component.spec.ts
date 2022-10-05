import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartNowBoxComponent } from './start-now-box.component';

describe('StartNowBoxComponent', () => {
  let component: StartNowBoxComponent;
  let fixture: ComponentFixture<StartNowBoxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StartNowBoxComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
