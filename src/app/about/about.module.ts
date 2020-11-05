import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
//own-modules
import { NavbarFooterModule } from "../navbar-footer/navbar-footer.module";

//components
import { MainAboutComponent } from './main-about/main-about.component';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutFeaturesComponent } from './about-features/about-features.component';



@NgModule({
  declarations: [MainAboutComponent, AboutHeaderComponent, AboutIntroComponent, AboutFeaturesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavbarFooterModule
  ]
})
export class AboutModule { }
