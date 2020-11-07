import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from "./home/main-home/main-home.component";
import { LoginComponent } from "./forms/login/login.component";
import { RegisterComponent } from "./forms/register/register.component";
import { ForgotPasswordComponent } from "./forms/forgot-password/forgot-password.component";
import { AllEventsComponent } from "./events/all-events/all-events.component"
import { MainAboutComponent } from "./about/main-about/main-about.component";
import { VerifyEmailComponent } from "./forms/verify-email/verify-email.component";
import { ResetPasswordComponent } from "./forms/reset-password/reset-password.component";
import { ValidatingUserComponent } from "./payment/validating-user/validating-user.component";
import { PostPaymentComponent } from "./payment/post-payment/post-payment.component";
import { MainTeamComponent } from "./team/main-team/main-team.component";
import { TechTalksComponent } from "./events/tech-talks/tech-talks.component";
import { AccountComponent } from "./my-account/account/account.component";

const routes: Routes = [
  {path: '' , component: MainHomeComponent},
  {path: 'about-samyak' , component: MainAboutComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword' , component: ForgotPasswordComponent},
  {path: 'events/:id1/:id2' , component: AllEventsComponent},
  {path: 'verify-email/:token' , component: VerifyEmailComponent},
  {path: 'reset-password/:token' , component: ResetPasswordComponent},
  {path: 'validate-user' , component: ValidatingUserComponent},
  {path: 'payment-verification' , component: PostPaymentComponent},
  {path: 'samyak-team' , component: MainTeamComponent},
  {path: 'techtalks' , component: TechTalksComponent},
  {path: 'my-account' , component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
