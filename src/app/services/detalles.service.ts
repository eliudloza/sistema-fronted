/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallesComponent } from 'src/app/components/detalles/detalles.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class DetallesService {
  
    constructor( private http: HttpClient ) { }
  
    getDetalles(path: string) : Observable<DetallesComponent> {
      return this.http.get<DetallesComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: DetallesComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: DetallesComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/