import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import * as $ from "jquery";

import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [MainHomeComponent, AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
