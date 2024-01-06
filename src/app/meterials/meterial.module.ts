import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule  } from '@angular/material/autocomplete'
import { MatButtonModule  } from '@angular/material/button'
import { MatCheckboxModule  } from '@angular/material/checkbox'
import { MatSidenavModule  } from '@angular/material/sidenav'
import { MatSnackBarModule  } from '@angular/material/snack-bar'
import { MatDatepickerModule  } from '@angular/material/datepicker'
import { MatDialogModule  } from '@angular/material/dialog'
import { MatButtonToggleModule  } from '@angular/material/button-toggle'
import { MatIconModule  } from '@angular/material/icon'
import { MatFormFieldModule  } from '@angular/material/form-field'
import {MatTabsModule} from "@angular/material/tabs"
import {MatInputModule} from "@angular/material/input"
import {MatStepperModule} from "@angular/material/stepper"
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatMenuModule} from "@angular/material/menu";

const MatItems = [
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatNativeDateModule,
  MatRadioModule,
  MatMenuModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatItems
  ],
  exports:[
    MatItems
  ]
})
export class MeterialModule { }
