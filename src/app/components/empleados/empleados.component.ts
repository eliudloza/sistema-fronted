import { Component, OnInit } from '@angular/core';
import { ToditoService, Empleados } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
 
  elements:Empleados={

    nombre:'',
    ap_paterno: '',
    ap_materno:'',
    direccion:'',
    ciudad:'',
    tel:0
  }

  public user:SocialUser;
  public loggedIn: boolean;  
  constructor(public servicio: ToditoService, public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  postEmpleado(){
    this.servicio.setEmpleado('/usuarios/crearEmpleado', this.elements).subscribe((res:any) =>{
      console.log(res);
    })
  
  
  }

}
