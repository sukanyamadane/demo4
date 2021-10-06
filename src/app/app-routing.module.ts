import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDemoComponent } from './dashboard/view-demo/view-demo.component';

const routes: Routes = [
  // {path:'',redirectTo:'/Home',pathMatch:'full'},
  
  {
    path:'',
 
    loadChildren:()=>
     import('./dashboard/dashboard.module').then(
       (m)=>m.DashboardModule
     ),
     

},
{
  path:'',
  loadChildren:()=>  

    import('./case/case.module').then((m)=>m.CaseModule),

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
