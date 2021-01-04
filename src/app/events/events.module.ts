import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

//material modules
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

//modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";


//components
import { AllEventsComponent  , MoreInfo , PostRegistrationEvents } from './all-events/all-events.component';
import { TechTalksComponent } from './tech-talks/tech-talks.component';


@NgModule({
  declarations: [AllEventsComponent , MoreInfo, TechTalksComponent , PostRegistrationEvents],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavbarFooterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [MoreInfo , PostRegistrationEvents]
})
export class EventsModule { }
