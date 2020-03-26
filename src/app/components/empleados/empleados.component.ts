import { Component, OnInit } from '@angular/core';
import { ToditoService, Empleados } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {Empleado } from 'src/app/components/empleados/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
 
  empleados: Empleado []=[];
  editar = false;
  idx:number;

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

    this.servicio.getEmpleado('/usuarios/indexEmple').subscribe((res : any) =>{
      this.empleados=res;
    })
  }

  postEmpleado(){
    this.servicio.setEmpleado('/usuarios/crearEmpleado', this.elements).subscribe((res:any) =>{
      console.log(res);
    });
    window.location.reload();
  }

  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteEmpleado('/usuarios/eliminaEmple/'+id).subscribe( (data: any) => {
      console.log(data);
    });
    window.location.reload();

  }

  Editar(empl : Empleado){

    this.editar=true;
    this.elements.nombre=(empl.nombre);
    this.elements.ap_paterno=(empl.ap_paterno);
    this.elements.ap_materno=(empl.ap_materno);
    this.elements.direccion=(empl.direccion);
    this.elements.ciudad=(empl.ciudad);
    this.elements.tel=(empl.tel);
    this.idx = empl.id
  }

  update(idx:number){
    //console.log(id)
    if(this.elements){
      this.servicio.updateCliente('/usuarios/actualizaEmple/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      });
    }
    window.location.reload();
  }

}
