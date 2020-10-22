import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from "./home/main-home/main-home.component";
import { LoginComponent } from "./forms/login/login.component";
import { RegisterComponent } from "./forms/register/register.component";
import { ForgotPasswordComponent } from "./forms/forgot-password/forgot-password.component";

const routes: Routes = [
  {path: '' , component: MainHomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword' , component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
