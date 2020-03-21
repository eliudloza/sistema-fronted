import { Component, OnInit} from '@angular/core';
import { ToditoService, Proveedor } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{

  elements:Proveedor={
    nombre:'',
    direccion:'',
    ciudad:'',
    compania:'',
    telefono:0
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

  postProvee(){
    this.servicio.setProvee('/usuarios/crearVendedor', this.elements).subscribe((res:any) =>{
      console.log(res);
    })
  }
 
}

