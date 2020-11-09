import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class NavbarFooterModule { }
