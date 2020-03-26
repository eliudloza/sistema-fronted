import { Component, OnInit } from '@angular/core';
import {AuthService2, TokenPayLoad} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public state:string='inactive'
  credentials: TokenPayLoad={
      id:0,
      nombre : '',
      email : '',
      password : '',
  }

  constructor( public auth: AuthService2, private router : Router) { }

  ngOnInit(): void {
  }

  
  register()
  {
      this.auth.register(this.credentials).subscribe(
          ()=>{
              this.router.navigateByUrl('/login')
          },
          err =>{console.error(err)}
      )
  }

}
