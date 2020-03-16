import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './components/register/register.component';
import {ConocenosComponent} from './components/conocenos/conocenos.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'conocenos', component: ConocenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
