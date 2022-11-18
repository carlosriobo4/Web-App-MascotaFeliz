import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';


@NgModule({
  declarations: [
    CambioContrasenaComponent,
    IdentificacionComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
