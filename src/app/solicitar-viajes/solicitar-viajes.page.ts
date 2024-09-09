import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Viajes } from '../_models/viajes';
import { LoadingController } from '@ionic/angular';
import { lastValueFrom, timer } from 'rxjs';

@Component({
  selector: 'app-solicitar-viajes',
  templateUrl: './solicitar-viajes.page.html',
  styleUrls: ['./solicitar-viajes.page.scss'],
})
export class SolicitarViajesPage implements OnInit {

  viajesSrv =inject(DatosService);
  loaderSrv = inject(LoadingController);
  constructor() { }

  async ngOnInit() {
    const loader = await this.loaderSrv.create({
      message: 'Cargando Viajes',
      duration:999999
    });
    await loader.present();
    await lastValueFrom(timer(1000));
    this.viajesSrv.mostrarViajes();
    await loader.dismiss();
  }

  imgViaje(viaje:Viajes){
    if(viaje.img){
      return viaje.img;
    }else{
      return 'https://ionicframework.com/docs/img/demos/avatar.svg';
    }
  }
 
  

  



}

