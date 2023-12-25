import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersPortalRoutingModule } from './teachers-portal-routing.module';
import { TeachersDetailsFormComponent } from './teachers-details-form/teachers-details-form.component';
import { MeterialModule } from 'src/app/meterials/meterial.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';


@NgModule({
  declarations: [
    TeachersDetailsFormComponent
  ],
  imports: [
    CommonModule,
    TeachersPortalRoutingModule,
    MeterialModule,
    SharedModule
  ],
  providers:[
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }
  ]
})
export class TeachersPortalModule { }
