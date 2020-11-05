import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ng material
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

//components
import { ValidatingUserComponent } from './validating-user/validating-user.component';
import { PostPaymentComponent } from './post-payment/post-payment.component';



@NgModule({
  declarations: [ValidatingUserComponent, PostPaymentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class PaymentModule { }
