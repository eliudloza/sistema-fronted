import { Component, OnInit } from '@angular/core';
import {AuthService2, TokenPayLoad} from 'src/app/services/auth.service'
import {Router} from '@angular/router';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import {GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public state:string='inactive'

  credentials: TokenPayLoad={
      id:0,
      nombre : '',
      email : '',
      password : '',
  }

  constructor (public auth: AuthService2,public router : Router,private authService: AuthService){}

  public user: SocialUser;
  public loggedIn: boolean;

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      ()=>{
          this.router.navigateByUrl('/dashboard')
      },
      err =>{console.error(err)}
  )
    //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }

  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

    logini()
    {
        this.auth.loginn(this.credentials).subscribe(
            ()=>{
                this.router.navigateByUrl('/dashboard')
            },
            err =>{console.error(err)}
        )
    }


}
