import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

//components
import { AccountComponent , EventSlots} from './account/account.component';

//modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";



@NgModule({
  declarations: [AccountComponent , EventSlots],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavbarFooterModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [EventSlots]
})
export class MyAccountModule { }
