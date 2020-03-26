import { Component, OnInit } from '@angular/core';
import { ToditoService, Canciones} from 'src/app/services/todito.service';
import { Proveedore } from 'src/app/components/proveedores/proveedores'
import { Categorias } from 'src/app/components/generos/categorias'
import { Cancion } from 'src/app/components/canciones/canciones';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit{
 
  proveedores:Proveedore[]=[];
  categoria:Categorias[]=[];
  canciones:Cancion[] = [];
  editar = false;
  idx:number;

  elements:Canciones={
    nombre: '',
    precio: 0,
    cantidad: 0,
    categoria: '',
    vendedor:''
  }

  constructor(public servicio: ToditoService, public authService: AuthService) {

    this.servicio.getCate('/usuarios/indexCate').subscribe((res:any)=>{

      this.categoria=res;
  });

  this.servicio.getProvee('/usuarios/indexProvee').subscribe((res:any)=>{

    this.proveedores=res;

  });
}

  ngOnInit(): void {
    this.servicio.getCancion('/usuarios/indexProduc').subscribe((res : any) =>{
      this.canciones=res;
    })
  }


  postCanciones(){
    this.servicio.setCancion('/usuarios/creaProduc',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
    window.location.reload();
  }

  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteCancion('/usuarios/eliminaProduc/'+id).subscribe( (data: any) => {
      console.log(data);
    });
    window.location.reload();

  }

  Editar(canciones : Cancion){

    this.editar=true;
    this.elements.nombre=(canciones.nombre);
    this.elements.precio=(canciones.precio);
    this.elements.cantidad=(canciones.cantidad);
    this.elements.categoria=(canciones.categoria);
    this.elements.vendedor=(canciones.vendedor);
    this.idx = canciones.id
  }

  update(idx:number){
    //console.log(idx)
    if(this.elements){
      this.servicio.updateCancion('/usuarios/actualizaProduc/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      });
    }
    window.location.reload();
  }
}
