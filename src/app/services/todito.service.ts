import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of} from 'rxjs';


export interface Cliente{
    nombre:string
	ap_paterno:string
	ap_materno:string
	direccion:string
	ciudad:string
	tel: number

}

@Injectable({

    providedIn: 'root'
})

export class ToditoService{
    constructor(private http: HttpClient){}

    getCliente(url:string){
        return this.http.get(url);
    }

    setCliente(url: string, client:Cliente):Observable<any>{
        return this.http.post(url, client)
    }
}