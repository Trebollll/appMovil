import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarViajesPage } from './solicitar-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarViajesPageRoutingModule {}
