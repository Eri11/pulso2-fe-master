import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStatsChartComponent } from './live-stats-chart.component';

describe('LiveStatsChartComponent', () => {
  let component: LiveStatsChartComponent;
  let fixture: ComponentFixture<LiveStatsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveStatsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
