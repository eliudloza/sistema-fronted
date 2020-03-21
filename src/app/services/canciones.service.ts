import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Canciones} from '../components/canciones/canciones.component';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor(private http: HttpClient) { }

  getCanciones(path: string): Observable<Canciones> {
    return this.http.get<Canciones>(environment.apiBaseURL + path);
  }

  create(path: string, data: Canciones) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string): Observable<Canciones> {
    return this.http.delete<Canciones>(environment.apiBaseURL + path);
  }

  update(path: string, data: Canciones) {
    return this.http.put(environment.apiBaseURL + path, data);
  }

}
