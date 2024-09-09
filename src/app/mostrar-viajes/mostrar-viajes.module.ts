import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarViajesPageRoutingModule } from './mostrar-viajes-routing.module';

import { MostrarViajesPage } from './mostrar-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarViajesPageRoutingModule
  ],
  declarations: [MostrarViajesPage]
})
export class MostrarViajesPageModule {}
