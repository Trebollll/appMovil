import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginconductorPage } from './loginconductor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginconductorPageRoutingModule {}
