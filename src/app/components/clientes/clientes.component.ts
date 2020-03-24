import { Component, OnInit } from '@angular/core';
import { ToditoService, Cliente } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {Clientes } from 'src/app/components/clientes/clientes';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes []=[];
  editar = false;
  idx:number;

  elements:Cliente={

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

    this.servicio.getCliente('/usuarios/indexCliente').subscribe((res : any) =>{
      this.clientes=res;
    })
  }

  postCliente(){
    this.servicio.setCliente('/usuarios/creaCliente', this.elements).subscribe((res:any) =>{
      console.log(res);
    });
  
  }
  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteCliente('/usuarios/eliminaCliente/'+id).subscribe( (data: any) => {
      console.log(data);
    });

  }

  Editar(cliente : Clientes){

    this.editar=true;
    this.elements.nombre=(cliente.nombre);
    this.elements.ap_paterno=(cliente.ap_paterno);
    this.elements.ap_materno=(cliente.ap_materno);
    this.elements.direccion=(cliente.direccion);
    this.elements.ciudad=(cliente.ciudad);
    this.elements.tel=(cliente.tel);
    this.idx = cliente.id
  }

  update(idx:number){
    //console.log(id)
    if(this.elements){
      this.servicio.updateCliente('/usuarios/actualizaCliente/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      })
    }
  }


}
  
