import { Component, OnInit } from '@angular/core';
import { ToditoService, Detalle} from 'src/app/services/todito.service';
import { Ordene } from 'src/app/components/ordenes/ordenes';
import { Detalles } from 'src/app/components/detalles/detalle';
import { Cancion} from 'src/app/components/canciones/canciones';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  implements OnInit{

  ordenes : Ordene []=[]
  detalles : Detalles[]=[]
  canciones : Cancion[]=[]
  editar = false;
  idx:number;
  
  elements:Detalle={
    precio:0,
    cantidad:0,
    producto:'',
    orden:''
  }

  public user:SocialUser;
  public loggedIn: boolean;  
  constructor(public servicio: ToditoService, public authService: AuthService) { 

    this.servicio.getCate('/usuarios/indexOrden').subscribe((res:any)=>{

      this.ordenes=res;
  });

  this.servicio.getProvee('/usuarios/indexProduc').subscribe((res:any)=>{

    this.canciones=res;

  });
  }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.servicio.getDetalle('/usuarios/indexDetalle').subscribe((res : any) =>{
      this.detalles=res;
    })
  }

  postDetalle(){
    this.servicio.setDetalle('/usuarios/creaDetalle',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
    window.location.reload();
  
  }
  
  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteCate('/usuarios/eliminaDetalle/'+id).subscribe( (data: any) => {
      console.log(data);
    });
    window.location.reload();

  }

  Editar(det : Detalles){

    this.editar=true;
    this.elements.precio=(det.precio);
    this.elements.cantidad=(det.cantidad);
    this.elements.producto=(det.producto);
    this.elements.orden=(det.orden);
    this.idx = det.id
  }

  update(idx:number){
    //console.log(id)
    if(this.elements){
      this.servicio.updateDetalle('/usuarios/actualizaDetalle/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      })
    }
    window.location.reload();
  }

}
