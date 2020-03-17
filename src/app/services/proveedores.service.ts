/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedoresComponent } from 'src/app/components/proveedores/proveedores.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class ProveedoresService {
  
    constructor( private http: HttpClient ) { }
  
    getProveedor(path: string) : Observable<ProveedoresComponent> {
      return this.http.get<ProveedoresComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: ProveedoresComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: ProveedoresComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/