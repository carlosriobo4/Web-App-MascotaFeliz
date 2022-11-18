import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosServiciosComponent } from './productos-servicios/productos-servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PlanesComponent } from './planes/planes.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearProductoServicioComponent } from './productos/servicios/crear-producto-servicio/crear-producto-servicio.component';
import { BorrarProductoServicioComponent } from './productos/servicios/borrar-producto-servicio/borrar-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos/servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos/servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { AceptarComponent } from './prospecto/aceptar/aceptar.component';
import { RechazarComponent } from './prospectos/rechazar/rechazar.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    MascotasComponent,
    ProductosComponent,
    ProductosServiciosComponent,
    SucursalesComponent,
    PlanesComponent,
    ProspectosComponent,
    CrearUsuarioComponent,
    EliminarUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    EditarMascotaComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    CrearProductoServicioComponent,
    BorrarProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    AceptarComponent,
    RechazarComponent,
    BuscarProductoServicioComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
