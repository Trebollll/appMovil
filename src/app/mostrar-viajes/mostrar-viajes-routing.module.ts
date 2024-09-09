import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarViajesPage } from './mostrar-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarViajesPageRoutingModule {}
