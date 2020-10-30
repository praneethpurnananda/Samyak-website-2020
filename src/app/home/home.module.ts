import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import * as $ from "jquery";
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

import { MainHomeComponent } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { SamyakThemeComponent } from './samyak-theme/samyak-theme.component';
import { SamyakSponsorsComponent } from './samyak-sponsors/samyak-sponsors.component';
import { SamyakContactComponent } from './samyak-contact/samyak-contact.component';



@NgModule({
  declarations: [MainHomeComponent, AboutComponent, SamyakThemeComponent, SamyakSponsorsComponent, SamyakContactComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavbarFooterModule
  ]
})
export class HomeModule { }
