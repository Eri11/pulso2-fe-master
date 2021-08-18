import { Component } from '@angular/core';
/* import { Chart, ChartDataset, ChartOptions } from 'chart.js';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming'; */
import * as Chart from 'chart.js';


Chart.apply(re)

@Component({
  selector: 'ngx-front-stats-chart',
  styleUrls: ['./front.component.scss'],
  /* template: `
  <div>
  <canvas
    baseChart
    [type]="'line'"
    [datasets]="datasets"
    [options]="options">
  </canvas>
</div> 
  `,*/
})

export class FrontLiveStatsChartComponent {

  options: Object;   label: 'Dataset 1',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgb(255, 99, 132)',
    borderDash: [8, 4],
    fill: true,
    data: []
  }, {
    label: 'Dataset 2',
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    cubicInterpolationMode: 'monotone',
    fill: true,
    data: []
  }];
  public options: ChartOptions = {
    scales: {
      x: {
        type: 'realtime',
        realtime: {
          delay: 2000,
          onRefresh: (chart: Chart) => {
            chart.data.datasets.forEach((dataset: ChartDataset) => {
              dataset.data.push({
                x: Date.now(),
                y: Math.random()
              });
            });
          }
        }
      }
    }
  };
}
}

function StreamingPlugin(StreamingPlugin: any) {
  throw new Error('Function not implemented.');
}
