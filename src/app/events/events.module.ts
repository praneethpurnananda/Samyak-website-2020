import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

import { AllEventsComponent  , MoreInfo} from './all-events/all-events.component';
import { TechTalksComponent } from './tech-talks/tech-talks.component';


@NgModule({
  declarations: [AllEventsComponent , MoreInfo, TechTalksComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavbarFooterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [MoreInfo]
})
export class EventsModule { }
