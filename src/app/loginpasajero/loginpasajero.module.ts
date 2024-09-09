import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpasajeroPageRoutingModule } from './loginpasajero-routing.module';

import { LoginpasajeroPage } from './loginpasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpasajeroPageRoutingModule
  ],
  declarations: [LoginpasajeroPage]
})
export class LoginpasajeroPageModule {}
