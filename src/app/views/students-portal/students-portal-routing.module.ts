import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form.component';

const routes: Routes = [
{path:"",component:StudentDetailsFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsPortalRoutingModule { }
