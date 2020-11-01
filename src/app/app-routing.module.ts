import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from "./home/main-home/main-home.component";
import { LoginComponent } from "./forms/login/login.component";
import { RegisterComponent } from "./forms/register/register.component";
import { ForgotPasswordComponent } from "./forms/forgot-password/forgot-password.component";
import { AllEventsComponent } from "./events/all-events/all-events.component"
import { MainAboutComponent } from "./about/main-about/main-about.component";
import { VerifyEmailComponent } from "./forms/verify-email/verify-email.component";

const routes: Routes = [
  {path: '' , component: MainHomeComponent},
  {path: 'about-samyak' , component: MainAboutComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword' , component: ForgotPasswordComponent},
  {path: 'events/:id' , component: AllEventsComponent},
  {path: 'verify-email/:token' , component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
