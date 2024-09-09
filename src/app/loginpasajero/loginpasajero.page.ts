import { Component, inject } from '@angular/core';
import { AnimationController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpasajero',
  templateUrl: './loginpasajero.page.html',
  styleUrls: ['./loginpasajero.page.scss'],
})
export class LoginpasajeroPage implements ViewDidEnter,ViewWillEnter {

  usuarioPasaj:string = '';
  passPasaj:string = '';
  
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  constructor() {
  }

  ionViewWillEnter(): void {
    
  }

  ionViewDidEnter(): void {
    this.usuarioPasaj = '';
    this.passPasaj = '';
  }
  
  ingresar(){
    if(this.usuarioPasaj == 'Coffy' && this.passPasaj == '54321'){
     this.loginSrv.nombreUsuario = this.usuarioPasaj;
     this.navController.navigateForward('/pasajero')
    }else{
      alert('Usuario incorrecto o contraseña incorrecta');
    }
  }

}
