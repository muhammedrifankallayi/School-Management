import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ImportStudentsFromExcelComponent } from './student-admission/import-students-from-excel/import-students-from-excel.component';
import { StudentStatusReportByClassComponent } from './student-admission/student-status-report-by-class/student-status-report-by-class.component';
import { MeterialModule } from 'src/app/meterials/meterial.module';


@NgModule({
  declarations: [
    ImportStudentsFromExcelComponent,
    StudentStatusReportByClassComponent
  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule,
    MeterialModule
  ]
})
export class ManagementPortalModule { }
