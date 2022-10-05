import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeveloperDesignerComponent } from './developer-designer.component';

describe('DeveloperDesignerComponent', () => {
  let component: DeveloperDesignerComponent;
  let fixture: ComponentFixture<DeveloperDesignerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeveloperDesignerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
