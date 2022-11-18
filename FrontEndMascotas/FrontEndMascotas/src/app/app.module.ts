import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificacionComponent } from './modulos/seguridad/identificacion/identificacion.component';
import { CambioContrasenaComponent } from './modulos/seguridad/cambio-contrasena/cambio-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificacionComponent,
    CambioContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
