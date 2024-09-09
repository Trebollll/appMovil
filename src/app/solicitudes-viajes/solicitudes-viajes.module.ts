import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesViajesPageRoutingModule } from './solicitudes-viajes-routing.module';

import { SolicitudesViajesPage } from './solicitudes-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesViajesPageRoutingModule
  ],
  declarations: [SolicitudesViajesPage]
})
export class SolicitudesViajesPageModule {}
