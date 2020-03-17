/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenesComponent } from 'src/app/components/ordenes/ordenes.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class OrdenesService {
  
    constructor( private http: HttpClient ) { }
  
    getOrden(path: string) : Observable<OrdenesComponent> {
      return this.http.get<OrdenesComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: OrdenesComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: OrdenesComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/