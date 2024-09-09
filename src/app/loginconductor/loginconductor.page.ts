import { Component, inject } from '@angular/core';
import { AnimationController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-loginconductor',
  templateUrl: './loginconductor.page.html',
  styleUrls: ['./loginconductor.page.scss'],
})
export class LoginconductorPage implements ViewDidEnter,ViewWillEnter {

  usuarioCond:string = '';
  passCond:string = '';
  
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  constructor() {
  }

  ionViewWillEnter(): void {
    
  }

  ionViewDidEnter(): void {
    this.usuarioCond = '';
    this.passCond = '';
  }
  
  async ingresar(){
    if(this.usuarioCond == 'Coffy' && this.passCond == '12345'){
     this.loginSrv.nombreUsuario = this.usuarioCond;
     this.navController.navigateForward('/conductor')
    }else{
      alert('Usuario incorrecto o contraseña incorrecta');
    }
    const res = await this.loginSrv.nombreUsuario
    console.log(res);
  }


}
