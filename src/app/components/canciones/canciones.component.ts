import { Component, OnInit } from '@angular/core';
import { ToditoService} from 'src/app/services/todito.service';
import { Proveedore } from 'src/app/components/proveedores/proveedores';
import { Categoria } from 'src/app/components/generos/categorias';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CancionesService} from '../../services/canciones.service';
import validate = WebAssembly.validate;


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
  proveedores: Proveedore[] = [];
  categoria: Categoria[] = [];
  form: FormGroup;
  isEdit: boolean = false;
  idx: number;

  /*ngModel*/
  canciones: Canciones = {
    nombre: '',
    precio: 0,
    cantidad: 0,
    categoria: '',
    proveedor: ''
  };
  constructor(private service: CancionesService) {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl(0, Validators.required),
      cantidad: new FormControl(0, Validators.required),
      categoria: new FormControl('', Validators.required),
      proveedor: new FormControl('', Validators.required)
    });
    this.service.getCanciones('/usuarios/creaProduc').subscribe((data: any) => {
      this.canciones = data;
    });

    setInterval(() => {
      this.service.getCanciones('/usuarios/creaProduc').subscribe((data: any) => {
        this.canciones = data;
        });
      }, 2000);
  }
  ngOnInit(): void {}
}
export interface Canciones {
  id?: number;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
  proveedor: string;
}
