import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form.component';
import { StDashboardComponent } from './st-dashboard/st-dashboard.component';

const routes: Routes = [
{
  path:"" ,children:[

  {path:"",component:StudentDetailsFormComponent},
  {path:"dashboard",component:StDashboardComponent},
  

]

},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsPortalRoutingModule { }
