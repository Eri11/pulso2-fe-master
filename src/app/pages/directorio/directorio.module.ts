import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule, LocalDataSource, ServerDataSource } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module'

import { DirectorioRoutingModule, routedComponents } from './directorio-routing.module';


@NgModule({
  imports: [
    ThemeModule,   
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,

    DirectorioRoutingModule,
    
    Ng2SmartTableModule,
    //LocalDataSource,
    //ServerDataSource
  ],
  declarations: [
    ...routedComponents,
  ],
  exports: [],
})
export class DirectorioModule { }
