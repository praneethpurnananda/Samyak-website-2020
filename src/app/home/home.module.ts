import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import * as $ from "jquery";
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

import { MainHomeComponent , MobileNav } from './main-home/main-home.component';
import { AboutComponent } from './about/about.component';
import { SamyakThemeComponent } from './samyak-theme/samyak-theme.component';
import { SamyakSponsorsComponent } from './samyak-sponsors/samyak-sponsors.component';
import { SamyakContactComponent } from './samyak-contact/samyak-contact.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [MainHomeComponent, AboutComponent, SamyakThemeComponent, SamyakSponsorsComponent, SamyakContactComponent , MobileNav],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavbarFooterModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class HomeModule { }
