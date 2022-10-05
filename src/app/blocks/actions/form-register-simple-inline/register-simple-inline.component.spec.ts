import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormRegisterSimpleInlineComponent } from './form-register-simple-inline.component';

describe('FormRegisterSimpleInlineComponent', () => {
  let component: FormRegisterSimpleInlineComponent;
  let fixture: ComponentFixture<FormRegisterSimpleInlineComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormRegisterSimpleInlineComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterSimpleInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
