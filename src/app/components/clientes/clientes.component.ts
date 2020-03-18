import { Component, OnInit } from '@angular/core';
import { ToditoService, Cliente } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

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
  }

  postCliente(){
    this.servicio.setCliente('/usuarios/creaCliente', this.elements).subscribe((res:any) =>{
      console.log(res);
    })
  
  
  }


}
  
