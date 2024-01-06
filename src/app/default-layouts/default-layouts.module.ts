import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './student-layouts/side-bar/side-bar.component';
import { HeaderComponent } from './student-layouts/header/header.component';
import { MeterialModule } from '../meterials/meterial.module';




@NgModule({
  declarations: [  
    HeaderComponent,
    SideBarComponent ,


   ],
  imports: [
    CommonModule,
    MeterialModule,
    
  ],
  exports:[
    HeaderComponent,
    SideBarComponent ,
   
  ]
})
export class DefaultLayoutsModule { }
