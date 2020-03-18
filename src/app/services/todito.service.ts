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

export interface Empleados{
    nombre:string
	ap_paterno:string
	ap_materno:string
	direccion:string
	ciudad:string
	tel: number
}

export interface Categoria{
    nombre:string
    descripcion:string
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

    getEmpleado(url:string){
        return this.http.get(url);
    }

    setEmpleado(url: string, emp:Empleados):Observable<any>{
        return this.http.post(url, emp)
    }

    getCate(url: string){
        return this.http.get(url)
    }

    setCate(url: string, cat:Categoria):Observable<any>{
        return this.http.post(url, cat)
    }
}