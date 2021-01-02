import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//own-modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

import { MainTeamComponent } from './main-team/main-team.component';



@NgModule({
  declarations: [MainTeamComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarFooterModule
  ]
})
export class TeamModule { }
