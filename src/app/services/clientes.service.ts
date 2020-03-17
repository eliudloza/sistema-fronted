import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { Observable } from 'rxjs';
import { ClientesComponent } from 'src/app/components/clientes/clientes.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class ClientesService {
  
    constructor( private http: HttpClient ) { }
  
    getCliente(path: string) : Observable<ClientesComponent> {
      return this.http.get<ClientesComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: ClientesComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: ClientesComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/