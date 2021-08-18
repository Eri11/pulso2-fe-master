import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbFlipCardComponent, NbCardComponent, NbProgressBarModule, NbCheckboxComponent } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DeviceFlipCardComponent } from './device-flip-card/device-flip-card.component';
import { HomedashComponent } from './homedash.component';
import { FrontComponent } from './device-flip-card/front/front.component';
import { BackComponent } from './device-flip-card/back/back.component';
import { AddButtonCardComponent } from './add-button-card/add-button-card.component';
import { FrontLiveStatsChartComponent } from './device-flip-card/front/front-live-stats-chart.component';
import { BackProfileChartComponent } from './device-flip-card/back/back-profile-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';





@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    LeafletModule,
   
    

    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    HomedashComponent,
    DeviceFlipCardComponent,
    FrontComponent,
    BackComponent,
    AddButtonCardComponent,

    DeviceFlipCardComponent,
    FrontComponent,
    FrontLiveStatsChartComponent,
    BackComponent,
    BackProfileChartComponent,

    

    

  ],
  exports: [
    DeviceFlipCardComponent,
    FrontComponent,
    FrontLiveStatsChartComponent,
    BackComponent,
    BackProfileChartComponent
    
    
  ],

})
export class HomedashModule { }
