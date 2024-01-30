import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPortalRoutingModule } from './students-portal-routing.module';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form.component';
import { MeterialModule } from 'src/app/meterials/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StDashboardComponent } from './st-dashboard/st-dashboard.component';


@NgModule({
  declarations: [
    StudentDetailsFormComponent,
    StDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentsPortalRoutingModule,
    MeterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsPortalModule { }
