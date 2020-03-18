import { Component, OnInit } from '@angular/core';
import { ToditoService, Ordenes} from 'src/app/services/todito.service';
import { Empleados } from 'src/app/components/empleados/empleados'
import { Clientes } from 'src/app/components/clientes/clientes'
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  
  empleados:Empleados[]=[]
  clientes:Clientes[]=[]

  elements:Ordenes={
    fecha:'',
    empleado:0,
    cliente:0
  }

  constructor(public servicio: ToditoService, public authService: AuthService) {

    this.servicio.getCliente('/usuarios/indexCliente').subscribe((res:any)=>{

      this.clientes=res;
  });

  this.servicio.getEmpleado('/usuarios/indexEmple').subscribe((res:any)=>{

    this.empleados=res;

  });
}

  public user: SocialUser;
  public loggedIn: boolean;
  ngOnInit(): void {

 this.authService.authState.subscribe((user) => {
       this.user = user;
       this.loggedIn = (user != null);
     });
  }


  postOrden(){
    this.servicio.setOrden('/usuarios/creaOrden',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
  }

}
