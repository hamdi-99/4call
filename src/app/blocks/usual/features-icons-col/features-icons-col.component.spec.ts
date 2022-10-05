import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturesIconsColComponent } from './features-icons-col.component';

describe('FeaturesIconsColComponent', () => {
  let component: FeaturesIconsColComponent;
  let fixture: ComponentFixture<FeaturesIconsColComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FeaturesIconsColComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesIconsColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
