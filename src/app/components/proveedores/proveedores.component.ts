import { Component, OnInit} from '@angular/core';
import { ToditoService, Proveedor } from 'src/app/services/todito.service';
import { Proveedore } from 'src/app/components/proveedores/proveedores'
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{

  proveedores:Proveedore[]=[];
  editar = false;
  idx:number;
  elements:Proveedor={
    nombre:'',
    biografia:'',
    pais:''
    
  }

  public user:SocialUser;
  public loggedIn: boolean;  
  constructor(public servicio: ToditoService, public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.servicio.getProvee('/usuarios/indexProvee').subscribe((res : any) =>{
      this.proveedores=res;
    })
  }

  postProvee(){
    this.servicio.setProvee('/usuarios/crearVendedor', this.elements).subscribe((res:any) =>{
      console.log(res);
    });
    window.location.reload();
  }
 
  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteProvee('/usuarios/eliminaVendedor/'+id).subscribe( (data: any) => {
      console.log(data);
    });
    window.location.reload();

  }

  Editar(artistas : Proveedore){

    this.editar=true;
    this.elements.nombre=(artistas.nombre);
    this.elements.biografia=(artistas.biografia);
    this.elements.pais=(artistas.pais);
    this.idx = artistas.id
  }

  update(idx:number){
    //console.log(idx)
    if(this.elements){
      this.servicio.updateProvee('/usuarios/actualizaVendedor/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      });
    }
    window.location.reload();
  }
}

