import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";

//own modules
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { UserFormsModule } from "./forms/forms.module";
import { NavbarFooterModule } from "./navbar-footer/navbar-footer.module";
import { EventsModule } from "./events/events.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AboutModule,
    UserFormsModule,
    NavbarFooterModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
