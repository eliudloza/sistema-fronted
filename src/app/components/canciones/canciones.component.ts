import { Component, OnInit } from '@angular/core';
import { ToditoService, Canciones} from 'src/app/services/todito.service';
import { Proveedore } from 'src/app/components/proveedores/proveedores'
import { Categoria } from 'src/app/components/generos/categorias'
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit{
 
  proveedores:Proveedore[]=[]
  categoria:Categoria[]=[]

  elements:Canciones={
    nombre: '',
    precio: 0,
    cantidad: 0,
    categoria: 0,
    proveedor:0
  }

  constructor(public servicio: ToditoService, public authService: AuthService) {

    this.servicio.getCate('/usuarios/indexCate').subscribe((res:any)=>{

      this.categoria=res;
  });

  this.servicio.getProvee('/usuarios/indexProvee').subscribe((res:any)=>{

    this.proveedores=res;

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


  postCanciones(){
    this.servicio.setCancion('/usuarios/creaProduc',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
  }

}
