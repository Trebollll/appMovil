import { Injectable } from '@angular/core';
import { Viajes } from './_models/viajes';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  viajes:Viajes[]=[]
  constructor() { }
  
  mostrarViajes(){
    this.viajes =[
      {
        fecha: '24/05/2024',
        patente: 'ctvvt99',
        vehiculo: 'mazda 3',
        origen: 'tu casa',
        destino: 'mi cama',
        pasajeros: '2',
        gama: 'media',
        precio: '10000',
        img: 'https://inchcapelatam.sirv.com/Mazda/BJAPLAA/mazda-3sport-caracteristicas-core-high-2.5-7g-6at-rojo-cristal.png?w=720'
      },
      {
        fecha: '04/05/2024',
        patente: 'dfgdf',
        vehiculo: 'kia pop',
        origen: 'concepcion',
        destino: 'tu casa',
        pasajeros: '2',
        gama: 'baja',
        precio: '500000',
        img: 'https://cdn.wheel-size.com/thumbs/c4/7e/c47ee56c88d30a20740237cc3c2dacd0.png'
      },
      {
        fecha: '01/05/2024',
        patente: 'retr',
        vehiculo: 'mercedez a200',
        origen: 'putre',
        destino: 'purranque',
        pasajeros: '4',
        gama: 'alta',
        precio: '70000',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTky4nSX91bMpaJYGed1R2fB11a_uMnVcUGsQ&s'
      },

    ]

  }

  email='';
  emaill= '';
  nombre = '';
  apellido= '';
  sexo= '';
  fechaNac= '';
  fono='';
  password= '';
  


 // registrar(email: string, password: string){
  //  return this.email
 // }
  
}
