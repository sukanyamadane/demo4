import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateCaseComponent } from './create-case/create-case.component';
import { SearchCaseComponent } from './search-case/search-case.component';


const routes : Routes=[
  {path:'Payment',component:PaymentComponent}
]
@NgModule({
  declarations: [
    PaymentComponent,
    CreateCaseComponent,
    SearchCaseComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ]
})
export class CaseModule { }
