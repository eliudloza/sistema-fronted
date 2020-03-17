import { Component } from '@angular/core';
import { ToditoService } from 'src/app/services/todito.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  forma: FormGroup;
  clientes
  
    constructor(private service: ToditoService) {
      this.forma = new FormGroup({
        'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'ap_paterno': new FormControl('', Validators.required),
        'ap_materno': new FormControl('', Validators.required),
        'direccion': new FormControl('', Validators.required),
        'ciudad': new FormControl('', Validators.required),
        'tel': new FormControl('', Validators.required),

      });
  
      this.service.getCliente('/indexCliente').subscribe( (data: any) => {
        this.clientes = data;
        console.log(data);
      });

    }
  }
  
