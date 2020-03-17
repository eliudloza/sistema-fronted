import { Component} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  forma: FormGroup;
  proveedores
  
    constructor(private service: ProveedoresService) {
      this.forma = new FormGroup({
        'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'direccion': new FormControl('', Validators.required),
        'ciudad': new FormControl('', Validators.required),
        'compañia': new FormControl('', Validators.required),
        'telefono': new FormControl('', Validators.required)
      });
  
      this.service.getProveedor('/indexProvee').subscribe( (data: any) => {
        this.proveedores = data;
        console.log(data);
      });

}
}

