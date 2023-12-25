import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersDetailsFormComponent } from './teachers-details-form/teachers-details-form.component';

const routes: Routes = [
  {path:"",component:TeachersDetailsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersPortalRoutingModule { }
