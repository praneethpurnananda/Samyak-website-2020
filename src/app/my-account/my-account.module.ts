import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

//components
import { AccountComponent } from './account/account.component';

//modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavbarFooterModule
  ]
})
export class MyAccountModule { }
