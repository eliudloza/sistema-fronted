import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {
 /* forma: FormGroup;
  productos
  proveedores
  generos

  constructor(private service: ProductosService, private service_provee: ProveedoresService, private service_genero: GenerosService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'precio': new FormControl('', Validators.required),
      'cantidad': new FormControl('', Validators.required),
      'genero': new FormControl('', Validators.required),
      'proveedor': new FormControl('', Validators.required)
    });

    this.service.getProductos('/indexProduc').subscribe( (data: any) => {
      this.productos = data;
      console.log(data);
    });

    this.service_provee.getProveedor('/indexProvee').subscribe( (data: any) => {
      this.proveedores = data;
      console.log(data);
    });

    this.service_genero.getGenero('/indexCate').subscribe( (data: any) => {
      this.generos = data;
      console.log(data);
    });

   }*/


}
