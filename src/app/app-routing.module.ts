import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { MangementLoginComponent } from './views/auth/mangement-login/mangement-login.component';

const routes: Routes = [

{path:"",component:LoginComponent},
{path:"management",component:MangementLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
