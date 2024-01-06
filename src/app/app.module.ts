import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { MangementLoginComponent } from './views/auth/mangement-login/mangement-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterials/meterial.module';
import {FormsModule ,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './default-layouts/student-layouts/header/header.component';
import { SideBarComponent } from './default-layouts/student-layouts/side-bar/side-bar.component';
import { DefaultLayoutsModule } from './default-layouts/default-layouts.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MangementLoginComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultLayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
