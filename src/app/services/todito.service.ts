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
    id:number
    nombre:string
    descripcion:string
}

export interface Proveedor{
    nombre:string
	biografia:string
    pais:string
   
}

export interface Canciones{
    nombre: string
    precio: number
    cantidad: number
    categoria: string
    vendedor: string
}

export interface Ordenes{
    fecha:string
    empleado:number
    cliente:number
}

export interface Detalle{
    precio: number
    cantidad : number
    producto : number
    orden : number
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

    updateCliente(url: string, client:Cliente):Observable<any>{
        return this.http.post(url,client)
    }

    deleteCliente(url: string):Observable<any>{
        return this.http.delete(url)
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
    updateCate(url: string, cat:Categoria):Observable<any>{
        return this.http.post(url,cat)
    }
    deleteCate(url: string):Observable<any>{
        return this.http.delete(url)
    }



    getProvee(url: string){
        return this.http.get(url)
    }

    setProvee(url: string, prov:Proveedor):Observable<any>{
        return this.http.post(url, prov)
    }
    deleteProvee(url: string): Observable<any> {
        return this.http.delete(url);
    }

    updateProvee(url: string, prov:Proveedor):Observable<any>{
        return this.http.post(url,prov)
    }


    getCancion(url: string){
        return this.http.get(url)
    }

    setCancion(url: string, can:Canciones):Observable<any>{
        return this.http.post(url, can)
    }

    deleteCancion(url: string): Observable<any> {
        return this.http.delete(url);
    }

    updateCancion(url: string, client:Canciones):Observable<any>{
        return this.http.post(url,client)
    }



    getOrden(url: string){
        return this.http.get(url)
    }

    setOrden(url: string, orden:Ordenes):Observable<any>{
        return this.http.post(url, orden)
    }



    getDetalle(url: string){
        return this.http.get(url)
    }

    setDetalle(url: string, detalle:Detalle):Observable<any>{
        return this.http.post(url, detalle)
    }
}