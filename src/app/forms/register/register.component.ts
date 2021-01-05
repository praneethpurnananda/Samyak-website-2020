import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { passwordValidation } from "../passwordvalidate";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoad:boolean = false;
  hide1:boolean = true;
  hide2:boolean = true;
  formbg;
  selectedcollege;
  field=false;
  registerForm: FormGroup;
  msg;
  gender = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Others'},
    {value: 'Prefer not to say', viewValue: 'Prefer not to say'}
  ];
  branch = [
    {value: 'CSE', viewValue: 'Cse'},
    {value: 'ECE', viewValue: 'Ece'},
    {value: 'CIVIL', viewValue: 'Civil'}
  ];
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar) {
      this.registerForm = this.fb.group({
        name: ['', [Validators.required,Validators.pattern(/^{[a-z A-Z]$/)]],
        email: ['', [Validators.required,Validators.email]],
        mobile: ['', [Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]],
        college: ['', Validators.required],
        current_year: ['',[ Validators.required,Validators.pattern(/^[0-9]{1,1}$/)]],
        branch: ['', Validators.required],
        college_id: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
        confirmPassword: ['', [passwordValidation , Validators.required]]
      });
      this.registerForm.controls.password.valueChanges
      .subscribe(
        x => this.registerForm.controls.confirmPassword.updateValueAndValidity()
      )
  }


  ngOnInit(): void {
    this.formbg = this._service.getFomrbg();
    this.isLoad = false;
  }

  college(){
    if(this.selectedcollege==="Other College Name"){
      this.field=true;
      this.registerForm.controls['college'].reset();
    }
    else{
      this.field=false;
    }
  }
  register(){
    this.isLoad = true;
    this.openSnackBar('Validating...');
    this._service.register(this.registerForm.value)
    .subscribe(
      data => {
        this.openSnackBar('Almost Done...');
        this.router.navigate(['/login'])
        this.isLoad = false;
        this._snackBar.dismiss();
      },
      error => {
        this.openSnackBar('Oops Unable to register...');
        this.msg = error.error.message;
        this.isLoad = false;
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 1000);
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

}
