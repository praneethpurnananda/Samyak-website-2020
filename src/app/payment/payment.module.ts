import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatingUserComponent } from './validating-user/validating-user.component';
import { PostPaymentComponent } from './post-payment/post-payment.component';



@NgModule({
  declarations: [ValidatingUserComponent, PostPaymentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
