import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { MangementLoginComponent } from './views/auth/mangement-login/mangement-login.component';
import { StudentLayoutsComponent } from './default-layouts/student-layouts/student-layouts.component';

const routes: Routes = [

{path:"login",component:LoginComponent},
{path:"management",component:MangementLoginComponent},
{path:"",component:StudentLayoutsComponent,children:[
  {path:"student" ,loadChildren:()=>import("./views/students-portal/students-portal.module").then(m=>m.StudentsPortalModule)},
]},
{path:"teacher",loadChildren:()=>import("./views/teachers-portal/teachers-portal.module").then(m=>m.TeachersPortalModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
