import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './student-layouts/side-bar/side-bar.component';
import { HeaderComponent } from './student-layouts/header/header.component';
import { MeterialModule } from '../meterials/meterial.module';
import { StudentLayoutsComponent } from './student-layouts/student-layouts.component';
import { RouterModule } from '@angular/router';
import { TeacherLayoutsComponent } from './teacher-layouts/teacher-layouts.component';
import { TeacherHeaderComponent } from './teacher-layouts/teacher-header/teacher-header.component';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { ManagementHeaderComponent } from './management-layout/management-header/management-header.component';




@NgModule({
  declarations: [  
    HeaderComponent,
    SideBarComponent,
    StudentLayoutsComponent,
    TeacherLayoutsComponent,
    TeacherHeaderComponent,
    ManagementLayoutComponent,
    ManagementHeaderComponent,


   ],
  imports: [
    CommonModule,
    MeterialModule,
    RouterModule
    
  ],
  exports:[
    HeaderComponent,
    SideBarComponent ,
    TeacherHeaderComponent,
    ManagementHeaderComponent
   
  ]
})
export class DefaultLayoutsModule { }
