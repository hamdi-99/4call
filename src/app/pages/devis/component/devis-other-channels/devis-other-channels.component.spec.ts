import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisOtherChannelsComponent } from './devis-other-channels.component';

describe('DevisOtherChannelsComponent', () => {
  let component: DevisOtherChannelsComponent;
  let fixture: ComponentFixture<DevisOtherChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevisOtherChannelsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DevisOtherChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
