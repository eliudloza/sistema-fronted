/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenerosComponent } from 'src/app/components/generos/generos.component';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class GenerosService {
  
    constructor( private http: HttpClient ) { }
  
    getGenero(path: string) : Observable<GenerosComponent> {
      return this.http.get<GenerosComponent>(environment.apiBaseURL + path);
    }
  
    create(path: string, data: GenerosComponent) {
      return this.http.post(environment.apiBaseURL + path, data);
    }
  
    delete(path: string) {
      return this.http.delete(environment.apiBaseURL + path);
    }
  
    update(path: string, data: GenerosComponent) {
      return this.http.put(environment.apiBaseURL + path, data);
    }
  }*/