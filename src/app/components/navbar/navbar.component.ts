import { Component, OnInit } from '@angular/core';
import {AuthService2} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public auth: AuthService2) { }

  ngOnInit(): void {
  }

}
