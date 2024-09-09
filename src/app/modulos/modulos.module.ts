import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }

export interface Registro{
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  sexo: string;
  fechaNac: string;
  fono: string;
  password: string;
}
