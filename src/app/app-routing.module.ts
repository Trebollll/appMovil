import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'viaje',
    loadChildren: () => import('./viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'loginconductor',
    loadChildren: () => import('./loginconductor/loginconductor.module').then( m => m.LoginconductorPageModule)
  },
  {
    path: 'loginpasajero',
    loadChildren: () => import('./loginpasajero/loginpasajero.module').then( m => m.LoginpasajeroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'mostrar-viajes',
    loadChildren: () => import('./mostrar-viajes/mostrar-viajes.module').then( m => m.MostrarViajesPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'solicitar-viajes',
    loadChildren: () => import('./solicitar-viajes/solicitar-viajes.module').then( m => m.SolicitarViajesPageModule)
  },
  {
    path: 'solicitudes-viajes',
    loadChildren: () => import('./solicitudes-viajes/solicitudes-viajes.module').then( m => m.SolicitudesViajesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
