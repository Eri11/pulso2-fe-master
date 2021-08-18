import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbFlipCardComponent, NbCardComponent, NbProgressBarModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DeviceFlipCardComponent } from './device-flip-card/device-flip-card.component';
import { HomedashComponent } from './homedash.component';
import { FrontComponent } from './device-flip-card/front/front.component';
import { BackComponent } from './device-flip-card/back/back.component';
import { AddButtonCardComponent } from './add-button-card/add-button-card.component';



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
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
   
    

  ],
  declarations: [
    HomedashComponent,
    DeviceFlipCardComponent,
    FrontComponent,
    BackComponent,
    AddButtonCardComponent,
    
  ],
  exports: [
    
  ],

})
export class HomedashModule { }
