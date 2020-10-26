import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AllEventsComponent } from './all-events/all-events.component';


@NgModule({
  declarations: [AllEventsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class EventsModule { }
