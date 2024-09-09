import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarViajesPageRoutingModule } from './solicitar-viajes-routing.module';

import { SolicitarViajesPage } from './solicitar-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarViajesPageRoutingModule
  ],
  declarations: [SolicitarViajesPage]
})
export class SolicitarViajesPageModule {}
