import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { MangementLoginComponent } from './views/auth/mangement-login/mangement-login.component';

const routes: Routes = [

{path:"",component:LoginComponent},
{path:"management",component:MangementLoginComponent},
{path:"student",loadChildren:()=>import("./views/students-portal/students-portal.module").then(m=>m.StudentsPortalModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
