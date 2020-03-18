import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './components/register/register.component';
import {ConocenosComponent} from './components/conocenos/conocenos.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { GenerosComponent } from './components/generos/generos.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { DetallesComponent } from './components/detalles/detalles.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
   children: [
     {path: 'canciones', component: CancionesComponent},
     {path: 'clientes', component: ClientesComponent},
     {path: 'proveedores', component: ProveedoresComponent},
     {path: 'empleados', component: EmpleadosComponent},
     {path: 'generos', component: GenerosComponent},
     {path: 'ordenar', component: OrdenesComponent},
     {path: 'detalle', component: DetallesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
