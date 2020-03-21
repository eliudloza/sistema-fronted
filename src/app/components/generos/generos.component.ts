import { Component, OnInit } from '@angular/core';
import { ToditoService, Categoria } from 'src/app/services/todito.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  categoria: Categoria []=[];
  
  elements:Categoria={
    id:0,
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
  }

  postCate(){
    this.servicio.setCate('/usuarios/creaCate', this.elements).subscribe((res:any) =>{
      console.log(res);
    });
  
  }
  Eliminar(id: number){
    console.log(id)
    this.servicio.deleteCate('/usuarios/eliminaCate/' + id).subscribe((res:any) =>{
      console.log(res)
    })
  }

}
