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
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticationService} from './authentication.service'
import { AuthGuardService} from './auth-guard.service';
import { from } from 'rxjs';

const routes = Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register ', component: RegisterComponent},
  {path: 'profile ', component: ProfileComponent,
      canActivate: [AuthGuardService]}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    CancionesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
