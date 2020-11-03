import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
//own-modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

//components
import { MainAboutComponent } from './main-about/main-about.component';
import { AboutHeaderComponent } from './about-header/about-header.component';



@NgModule({
  declarations: [MainAboutComponent, AboutHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarFooterModule
  ]
})
export class AboutModule { }
