import { Component, OnInit } from '@angular/core';
import { ToditoService, Ordenes} from 'src/app/services/todito.service';
import { Empleado } from 'src/app/components/empleados/empleados'
import { Clientes } from 'src/app/components/clientes/clientes'
import { Ordene } from 'src/app/components/ordenes/ordenes'
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  
  empleados:Empleado[]=[]
  clientes:Clientes[]=[]
  ordenes:Ordene[]=[]
  editar = false;
  idx:number;


  elements:Ordenes={
    fecha:'',
    empleado:'',
    cliente:''
  }

  constructor(public servicio: ToditoService, public authService: AuthService) {

    this.servicio.getCliente('/usuarios/indexCliente').subscribe((res:any)=>{

      this.clientes=res;
  });

  this.servicio.getEmpleado('/usuarios/indexEmple').subscribe((res:any)=>{

    this.empleados=res;

  });
}

  public user: SocialUser;
  public loggedIn: boolean;
  ngOnInit(): void {

 this.authService.authState.subscribe((user) => {
       this.user = user;
       this.loggedIn = (user != null);
     });
     this.servicio.getOrden('/usuarios/indexOrden').subscribe((res : any) =>{
      this.ordenes=res;
    })
  }


  postOrden(){
    this.servicio.setOrden('/usuarios/creaOrden',this.elements).subscribe((res:any)=>{

      console.log(res);

    });
  }

  
  Eliminar( id: number ) {
    console.log(id);
    this.servicio.deleteOrden('/usuarios/eliminaOrden/'+id).subscribe( (data: any) => {
      console.log(data);
    });

  }

  Editar(orde : Ordene){

    this.editar=true;
    this.elements.fecha=(orde.fecha);
    this.elements.empleado=(orde.empleado);
    this.elements.cliente=(orde.cliente);
    this.idx = orde.id
  }

  update(idx:number){
    //console.log(id)
    if(this.elements){
      this.servicio.updateOrden('/usuarios/actualizaOrden/'+ idx, this.elements).subscribe((res : any) =>{
        console.log(res);
      })
    }
  }

}
