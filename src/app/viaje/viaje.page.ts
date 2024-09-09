import { Component, Inject, inject, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  check=true;
  viajeSrv = inject(DatosService);
  NavController = inject(NavController);

  fecha:string = '';
  patente:string = '';
  vehiculo:string = '';
  gama:string = '';
  origen:string = '';
  destino:string = '';
  pasajeros:string = '';
  precio:string = '';
  img:string = '';
  constructor(public menucontroler: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    console.log('open menu')
    this.menucontroler.toggle('principal')

  }

  async crearViaje(){
    const nuevoViaje = {
      fecha: this.fecha,
      patente: this.patente,
      vehiculo: this.vehiculo,
      gama: this.gama,
      origen: this.origen,
      destino: this.destino,
      pasajeros: this.pasajeros,
      precio: this.precio,
      img: this.img
    };
    this.viajeSrv.viajes.push(nuevoViaje);
    this.NavController.navigateRoot('mostrar-viajes',{animated:true});
  }
  async volver(){
    this.NavController.pop();
  }

}
