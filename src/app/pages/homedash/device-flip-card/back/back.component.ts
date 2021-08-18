import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-device-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
  /* template: `
    <div echarts
         class="echart"
         [options]="options"
         (chartInit)="onChartInit($event)"
         (chartClick)="onChartClick($event)">
    </div>
  `, */
  changeDetection: ChangeDetectionStrategy.OnPush,  
  
})
export class BackComponent {}