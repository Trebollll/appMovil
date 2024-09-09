import { Component, inject, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { lastValueFrom, timer } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

 // usuarioCond:string = '';

  usuario : string = 'Coffy';
  vehiculo : string ='Mazda 3';
  email: string ='coffy@email.com';
  edad: string = 'edad';
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  loaderSrv = inject(LoadingController);
  constructor() { }

  async ngOnInit() {
    const loader = await this.loaderSrv.create({
      message: 'Cargando Perfil',
      duration:999999
    });
    await loader.present();
    await lastValueFrom(timer(1000));
    await loader.dismiss();
  }

}
