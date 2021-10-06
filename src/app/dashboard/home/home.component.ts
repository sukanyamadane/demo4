import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  State:any=['Maharashtra'];
  showSignUp = false;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(frm:any)
 {

 }
 SetPassword()
 {

 }
 showLogin()
 {
   this.showSignUp=false;

 }
 showSignup()
 {
   this.showSignUp=true;
  
   
 }
}
