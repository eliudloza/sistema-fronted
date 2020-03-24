import { Component, OnInit } from '@angular/core';
import { ToditoService, Detalle} from 'src/app/services/todito.service';
import { Ordene } from 'src/app/components/ordenes/ordenes';



@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  implements OnInit{

  constructor(public servicio: ToditoService) {}
  ngOnInit(): void {}

}
