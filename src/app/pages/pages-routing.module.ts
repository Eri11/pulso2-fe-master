import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomedashComponent } from './homedash/homedash.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
      {
      path: 'dashboard',
      component: HomedashComponent,
    },
    {
      path: 'directorio',
      loadChildren: () => import('./directorio/directorio.module')
        .then(m => m.DirectorioModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
