import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorioComponent } from './directorio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MedicosComponent } from './medicos/medicos.component';


const routes: Routes = [{
  path: '',
  component: DirectorioComponent,
  children: [
    {
      path: 'empleados',
      component: EmpleadosComponent,
    },
    {
      path: 'medicos',
      component: MedicosComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorioRoutingModule { }

export const routedComponents = [
  DirectorioComponent,
  EmpleadosComponent,
  MedicosComponent,
];
