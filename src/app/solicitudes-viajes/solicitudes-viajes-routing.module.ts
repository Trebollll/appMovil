import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesViajesPage } from './solicitudes-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesViajesPageRoutingModule {}
