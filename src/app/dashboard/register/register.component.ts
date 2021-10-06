import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  SecurityQuestion:any=['What is your favoirite color?','What is your pet name?'];
  ContactTypes:any=['Select','Home','Office','Other'];
  StateBars:any=['Select','Washington','New York',"New Jersey"];
  States:any=['Select','Washington','New York',"New Jersey"]

  userobj={
    Email:"",
    Password:"",
    CPassword:"",
    SecurityQuestion:"",
    SecurityQuestAns:"",
    IsNewAccount:"New",
    ContactType:"",
    BarNumber:"",
    StateBar:"",
    FirstName:"",
    MiddleName:"",
    LastName:"",
    StreetAddress:"",
    OtherAddress:"",
    State:"",
    City:"",
    Zip:"",
    PhoneNumber:"",
    CustNumber:"",
    BillingZipCode:""
  }

  constructor(private router:Router,private ser:CommonserviceService) { }

  ngOnInit(): void {
    this.userobj=this.ser.userdata;
  }
  onSubmit(frm:any)
  {
    alert("Registeration successfully");
    this.ser.userdata=this.userobj;
    this.router.navigate(['/Payment']);
  }

}
