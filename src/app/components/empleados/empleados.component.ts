import { Component } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  {
  forma: FormGroup;
  empleados
  
    constructor(private service: EmpleadosService) {
      this.forma = new FormGroup({
        'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'ap_paterno': new FormControl('', Validators.required),
        'ap_materno': new FormControl('', Validators.required),
        'direccion': new FormControl('', Validators.required),
        'ciudad': new FormControl('', Validators.required),
        'tel': new FormControl('', Validators.required),

      });
  
      this.service.getEmpleado('/indexCliente').subscribe( (data: any) => {
        this.empleados = data;
        console.log(data);
      });

    }

}
