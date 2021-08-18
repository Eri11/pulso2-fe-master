import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFlipCardComponent } from './device-flip-card.component';

describe('RevealCardFullComponent', () => {
  let component: DeviceFlipCardComponent;
  let fixture: ComponentFixture<DeviceFlipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceFlipCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
