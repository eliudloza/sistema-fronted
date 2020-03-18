import { Component } from '@angular/core';
 

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent {
  /*forma: FormGroup;
  ordenes
  empleados
  clientes
  
    constructor(private service: OrdenesService, private service_empl: EmpleadosService, private service_clien: ClientesService) {
      this.forma = new FormGroup({
        'fecha': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'empleado': new FormControl('', Validators.required),
        'cliente': new FormControl('', Validators.required)
      });
  
      this.service.getOrden('/indexOrden').subscribe( (data: any) => {
        this.ordenes = data;
        console.log(data);
      });
  
      this.service_empl.getEmpleado('/indexEmpl').subscribe( (data: any) => {
        this.empleados = data;
        console.log(data);
      });
  
      this.service_clien.getCliente('/indexCliente').subscribe( (data: any) => {
        this.clientes = data;
        console.log(data);
      });
  
     }*/

}
