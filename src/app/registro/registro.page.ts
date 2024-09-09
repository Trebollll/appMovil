import { Component, OnInit, inject } from '@angular/core';
import { DatosService } from '../datos.service';
import { ViewDidEnter, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit,ViewDidEnter {


  emaill:string = '';
  nombre:string = '';
  apellido:string = '';
  sexo:string = '';
  fechaNac:string = '';
  fono: string ='';
  password:string = '';

  navController = inject(NavController);
  loginSrv = inject(DatosService);
 

  constructor(public datosService: DatosService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    
  }

  ionViewDidEnter(): void {
    this.emaill = '';
    this.password = '';
  }

  async registrarse(){
    this.datosService.email = this.emaill;
    this.datosService.nombre = this.nombre;
    this.datosService.apellido = this.apellido;
    this.datosService.sexo = this.sexo;
    this.datosService.fechaNac = this.fechaNac;
    this.datosService.password = this.password;
    //const res (es solo para validar por consola que esta capturando los datos que estoy ingresando para un futuro almacenar y validar xdd)
    const res = await this.datosService.email
    const res2 = await this.datosService.nombre
    console.log('Bienvenido!',res, res2);
    }

  }


