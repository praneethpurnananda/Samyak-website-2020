import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent , SecondNav} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SecondNav],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class NavbarFooterModule { }
