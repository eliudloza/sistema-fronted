import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent  {
 /* forma: FormGroup;
  generos
  
    constructor(private service: GenerosService) {
      this.forma = new FormGroup({
        'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'descripcion': new FormControl('', Validators.required)
      });
      
  
      this.service.getGenero('/indexCate').subscribe( (data: any) => {
        this.generos = data;
        console.log(data);
      });

}*/


}
