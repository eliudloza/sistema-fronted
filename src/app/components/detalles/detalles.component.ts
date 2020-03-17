import { Component } from '@angular/core';
import { DetallesService } from 'src/app/services/detalles.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  forma: FormGroup;
  detalles
  productos
  ordenes

  constructor(private service: DetallesService, private service_produc: ProductosService, private service_orden: OrdenesService) {
    this.forma = new FormGroup({
      'precio': new FormControl('', Validators.required),
      'cantidad': new FormControl('', Validators.required),
      'producto': new FormControl('', Validators.required),
      'ordenes': new FormControl('', Validators.required)
    });

    this.service.getDetalles('/indexDetalle').subscribe( (data: any) => {
      this.detalles = data;
      console.log(data);
    });

    this.service_produc.getProductos('/indexProduc').subscribe( (data: any) => {
      this.productos = data;
      console.log(data);
    });

    this.service_orden.getOrden('/indexOrden').subscribe( (data: any) => {
      this.ordenes = data;
      console.log(data);
    });

   }


}
