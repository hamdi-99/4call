import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeHeadingComponent } from './home-heading.component';

describe('HomeHeadingComponent', () => {
  let component: HomeHeadingComponent;
  let fixture: ComponentFixture<HomeHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeHeadingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
