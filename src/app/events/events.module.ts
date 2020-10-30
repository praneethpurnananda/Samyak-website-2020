import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { AllEventsComponent } from './all-events/all-events.component';


@NgModule({
  declarations: [AllEventsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class EventsModule { }
