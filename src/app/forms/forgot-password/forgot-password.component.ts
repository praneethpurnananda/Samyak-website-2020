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


  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router) {

    this.forgotPasswordForm = this.fb.group({
        email: ['', Validators.required]
    });

  }

  submit(){

  }

  ngOnInit(): void {
  }

}
