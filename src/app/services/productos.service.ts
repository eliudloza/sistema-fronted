/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CancionesComponent } from 'src/app/components/canciones/canciones.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class ProductosService {
  
    constructor( private http: HttpClient ) { }
  
    getProductos(path: string) : Observable<CancionesComponent> {
      return this.http.get<CancionesComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: CancionesComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: CancionesComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/