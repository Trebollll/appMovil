import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpasajeroPage } from './loginpasajero.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpasajeroPageRoutingModule {}
