import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HowToGuideComponent } from './how-to-guide/how-to-guide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


const routes : Routes=[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'HowToGuide',component:HowToGuideComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'SignIn',component:SignInComponent},
  {path:'ViewDemo',component:ViewDemoComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Contact',component:ContactComponent}
  
]

@NgModule({
  declarations: [
    HomeComponent,
    HowToGuideComponent,
    AboutUsComponent,
    SignUpComponent,
    SignInComponent,
    ViewDemoComponent,
    RegisterComponent,
    ContactComponent
  
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    HttpClientModule
    
  ]
})
export class DashboardModule { }
