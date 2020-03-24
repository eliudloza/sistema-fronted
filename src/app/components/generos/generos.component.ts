import { Component, OnInit } from '@angular/core';
import { ToditoService, Categoria } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { Categorias} from 'src/app/components/generos/categorias'
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  categoria: Categorias []=[];
  editar = false;
  idx:number;
  
  elements:Categoria={
    nombre:'',
    descripcion:''
  }

  public user:SocialUser;
  public loggedIn: boolean;  
  constructor(public servicio: ToditoService, public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.servicio.getEmpleado('/usuarios/indexCate').subscribe((res : any) =>{
      this.categoria=res;
    })
  }

  postCate(){
    this.servicio.setCate('/usuarios/creaCate',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
  
  }

  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteCate('/usuarios/eliminaCate/'+id).subscribe( (data: any) => {
      console.log(data);
    });

  }

  Editar(cate : Categorias){

    this.editar=true;
    this.elements.nombre=(cate.nombre);
    this.elements.descripcion=(cate.descripcion);
    this.idx = cate.id
  }

  update(idx:number){
    //console.log(id)
    if(this.elements){
      this.servicio.updateCate('/usuarios/actualizaCate/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      })
    }
  }

}
