import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { MangementLoginComponent } from './views/auth/mangement-login/mangement-login.component';
import { StudentLayoutsComponent } from './default-layouts/student-layouts/student-layouts.component';
import { TeacherLayoutsComponent } from './default-layouts/teacher-layouts/teacher-layouts.component';
import { ManagementLayoutComponent } from './default-layouts/management-layout/management-layout.component';

const routes: Routes = [

{path:"login",component:LoginComponent},

{
  path:"management",component:ManagementLayoutComponent ,
  children:[
    {path:"",loadChildren:()=>import("./views/management-portal/management-portal.module").then(m=>m.ManagementPortalModule)}
  ]
},


{
  path:"",component:StudentLayoutsComponent,children:[

  {path:"" ,loadChildren:()=>import("./views/students-portal/students-portal.module").then(m=>m.StudentsPortalModule)},

 ]
},
{
  path:"teacher",component:TeacherLayoutsComponent,
  children:[
    
    {path:"",loadChildren:()=>import("./views/teachers-portal/teachers-portal.module").then(m=>m.TeachersPortalModule)}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
