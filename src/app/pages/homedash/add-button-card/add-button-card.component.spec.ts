import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonCardComponent } from './add-button-card.component';

describe('AddButtonCardComponent', () => {
  let component: AddButtonCardComponent;
  let fixture: ComponentFixture<AddButtonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
