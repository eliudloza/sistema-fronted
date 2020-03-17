/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadosComponent } from 'src/app/components/empleados/empleados.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class EmpleadosService {
  
    constructor( private http: HttpClient ) { }
  
    getEmpleado(path: string) : Observable<EmpleadosComponent> {
      return this.http.get<EmpleadosComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: EmpleadosComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: EmpleadosComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/