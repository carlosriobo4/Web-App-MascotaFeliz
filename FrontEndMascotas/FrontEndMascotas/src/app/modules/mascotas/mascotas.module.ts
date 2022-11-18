import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { AfiliacionComponent } from './afiliacion/afiliacion.component';
import { RevisarEstadoComponent } from './revisar-estado/revisar-estado.component';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';
import { CrearAfiliacionComponent } from './afiliacion/crear-afiliacion/crear-afiliacion.component';
import { EliminarAfiliacionComponent } from './afiliacion/eliminar-afiliacion/eliminar-afiliacion.component';
import { EditarAfiliacionComponent } from './afiliacion/editar-afiliacion/editar-afiliacion.component';
import { BuscarAfiliacionComponent } from './afiliacion/buscar-afiliacion/buscar-afiliacion.component';
import { AceptarComponent } from './cambiar-estado/aceptar/aceptar.component';
import { RechazarComponent } from './cambiar-estado/rechazar/rechazar.component';
import { AfiliadoComponent } from './revisar-estado/afiliado/afiliado.component';
import { RechazadoComponent } from './revisar-estado/rechazado/rechazado.component';
import { EnEstudioComponent } from './revisar-estado/en-estudio/en-estudio.component';


@NgModule({
  declarations: [
    AfiliacionComponent,
    RevisarEstadoComponent,
    CambiarEstadoComponent,
    CrearAfiliacionComponent,
    EliminarAfiliacionComponent,
    EditarAfiliacionComponent,
    BuscarAfiliacionComponent,
    AceptarComponent,
    RechazarComponent,
    AfiliadoComponent,
    RechazadoComponent,
    EnEstudioComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
