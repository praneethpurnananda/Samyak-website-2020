import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css' , "../login/login.component.css"]
})
export class ForgotPasswordComponent implements OnInit {


  logo;
  isLoad:boolean = false;
  msg;
  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router) {

    this.forgotPasswordForm = this.fb.group({
        email: ['', [Validators.email , Validators.required]]
    });

  }

  submit(){
    this.isLoad = true;
    this._service.forgotpassword(this.forgotPasswordForm.value)
    .subscribe(
      data =>{
       // console.log(data);
        this.msg = data;
        this.isLoad = false;
        this.forgotPasswordForm.reset();
      },
      error => {
        this.msg = error.error;
        this.isLoad = false
      }
    );
  }

  ngOnInit(): void {
    this.msg = '';
    this.logo = this._service.getBlueLogo();
  }

}
