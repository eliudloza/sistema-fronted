import { Injectable } from '@angular/core'
import { HttpClient } from  '@angular/common/http'
import { Observable, of} from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { basename } from 'path'

export interface UserDetails{
    id: number
    nombre: string
    email: string
    password: string
    exp:number
}
interface TokenResponse{
    token:string

}

interface TokenPayload{
    id: number
    nombre: string
    email: string
    password: string
    
}

@Injectable()
export class AuthenticationService{
    private token: string

    constructor(private http: HttpClient, private router:Router){}

    private saveToken(token: string): void{
        localStorage.setItem('userToken', token)
        this.token = token
    }

    private getToken(): string {
        if(!this.token){
            this.token = localStorage.getItem('userToken')
        }
        return this.token
    }

    public  getUserDetails():UserDetails{
        const token = this.getToken()
        
        let playLoad
        if(token){
            playLoad = token.split('.')[1]
            playLoad = window.atob(playLoad)
            return JSON.parse(playLoad)
        }else{
            return null
        }
    }

    public isLoddeIn (): boolean{
        const user = this.getUserDetails()

        if(user){
            return user.exp > Date.now() /1000
        }else{
            return false
        }
    }

    public register(user: TokenPayload): Observable<any>{
        return this.http.post(`/users/registers`, user)
    }

    
    public login(user: TokenPayload): Observable<any>{
        const base=  this.http.post(`/users/login`, user)

        const request = base.pipe(
            map((data: TokenResponse)=>{
                if(data.token){
                    this.saveToken(data.token)
                }
                return data
            })
        ) 
        return request
    }

    public profile(id): Observable<any>{
        return this.http.get(`users/mostrar/${id}`)
    }

    public logout():void{
        this.token = ''
        window.localStorage.removeItem('userToken')
        this.router.navigateByUrl('/')
    }
}