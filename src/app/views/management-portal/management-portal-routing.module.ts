import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportStudentsFromExcelComponent } from './student-admission/import-students-from-excel/import-students-from-excel.component';
import { StudentStatusReportByClassComponent } from './student-admission/student-status-report-by-class/student-status-report-by-class.component';

const routes: Routes = [

{path:"",children:[
  {path:"import-student-from-excel",component:ImportStudentsFromExcelComponent},
  {path:"student-status-report-by-class",component:StudentStatusReportByClassComponent}
]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule { }
