import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './student-layouts/side-bar/side-bar.component';
import { HeaderComponent } from './student-layouts/header/header.component';
import { MeterialModule } from '../meterials/meterial.module';
import { StudentLayoutsComponent } from './student-layouts/student-layouts.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [  
    HeaderComponent,
    SideBarComponent,
    StudentLayoutsComponent ,


   ],
  imports: [
    CommonModule,
    MeterialModule,
    RouterModule
    
  ],
  exports:[
    HeaderComponent,
    SideBarComponent ,
   
  ]
})
export class DefaultLayoutsModule { }
