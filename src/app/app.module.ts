import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
//SERVICIOS
import {SpotifyService} from './services/spotify.service';
import { from } from 'rxjs';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { DetallesComponent } from './components/detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    CancionesComponent,
    ConocenosComponent,
    ProveedoresComponent,
    GenerosComponent,
    ClientesComponent,
    EmpleadosComponent,
    OrdenesComponent,
    DetallesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
