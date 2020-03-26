import { Component, OnInit } from '@angular/core';
import { AuthService2 } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public auth: AuthService2 ) { }

  ngOnInit() {
    // this.auth.handleAuthCallback();
  }

}
