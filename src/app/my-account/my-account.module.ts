import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

//components
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class MyAccountModule { }
