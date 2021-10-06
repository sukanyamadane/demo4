import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public http: CommonserviceService, private router:Router){

  }

  ngOnInit(): void {
  }
  onSubmit(frm:any)
  {
    alert("sign in successfully");
     this.http.userdata=frm.value;
    this.router.navigate(['/Register']);
    this.http.sendEmail("http://localhost:3000/sendmail", frm.value.Email).subscribe(
      data => {
        debugger;
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${frm.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
       
      },() => {
     
      }
    );
  }

}
