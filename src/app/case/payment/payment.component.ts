import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  States:any=['Washington','New York','New Jersey'];
  CardTypes:any=['American Express','Mastercard','Visa'];

ExpiryMonths:any=['Janeuary','February','March','April','May','June','July','August','September','October','November','December'];

ExpiryYears:any=[2021,2022,2023,2024,2025];

  userobj={
    Email:"",
    Password:"",
    FirstName:"",
    LastName:"",
    StreetAddress:"",
    State:"",
    City:"",
    Zip:"",
    PhoneNumber:"",
    CardType:"",
    ExpiryYear:"",
    ExpiryMonth:"",
    Card1:"",
    Card2:"",
    Card3:"",
    Card4:"",
    Cardcvc:""
  }
  constructor(private ser:CommonserviceService) { }

  ngOnInit(): void {
    this.userobj=this.ser.userdata;
  }
  onSubmit(frm:any)
  {

  }

}
