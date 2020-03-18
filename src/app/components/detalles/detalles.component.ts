import { Component, OnInit } from '@angular/core';
import { ToditoService, Detalle} from 'src/app/services/todito.service';
import { Ordenes } from 'src/app/components/ordenes/ordenes'
import { Canciones } from 'src/app/components/canciones/canciones'
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 

  
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  implements OnInit{

  producto:Canciones[]=[]
  ordenes:Ordenes[]=[]

  elements:Detalle={
    precio: 0,
    cantidad : 0,
    producto : 0,
    orden : 0
  }

  constructor(public servicio: ToditoService, public authService: AuthService) {

    this.servicio.getCancion('/usuarios/indexProduc').subscribe((res:any)=>{

      this.producto=res;
  });

  this.servicio.getOrden('/usuarios/indexOrden').subscribe((res:any)=>{

    this.ordenes=res;

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


  postDetalle(){
    this.servicio.setDetalle('/usuarios/creaDetalle',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
  }

}
