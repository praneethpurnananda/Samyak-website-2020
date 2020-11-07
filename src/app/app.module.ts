import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

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
import { TeamModule } from "./team/team.module";
import { PaymentModule } from "./payment/payment.module";
import { MyAccountModule } from "./my-account/my-account.module";

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
    EventsModule,
    TeamModule,
    PaymentModule,
    MyAccountModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
