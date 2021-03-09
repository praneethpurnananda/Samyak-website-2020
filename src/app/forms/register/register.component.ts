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
  selectedbranch;
  selectedyear;
  field=false;
  field1=false;
  field2=false;
  registerForm: FormGroup;
  postregister:string = "postregsiter";
  msg;
  gender = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Others'},
    {value: 'Prefer not to say', viewValue: 'Prefer not to say'}
  ];
  branch = [
    {value: 'AI' , viewValue: 'Artificial Intelligence & Data Science'},
    {value: 'BT' , viewValue: 'Bio-Technology'},
    {value: 'CIVIL' , viewValue: 'Civil Engineering'},
    {value: 'CSE' , viewValue: 'Computer Science & Engineering'},
    {value: 'IT' , viewValue: 'Computer Science & Information Technology'},
    {value: 'ECE' , viewValue: 'Electronics & Communication Engineering'},
    {value: 'ECE' , viewValue: 'Electronics & Computer Engineering'},
    {value: 'EEE' , viewValue: 'Electrical & Electronics Engineering'},
    {value: 'ME' , viewValue: 'Mechanical Engineering'},
    {value: 'PE' , viewValue: 'Petroleum Engineering'},
    {value: 'ARTS' , viewValue: 'Arts'},
    {value: 'BES1' , viewValue: 'Basic Engineering Science - 1'},
    {value: 'BES2' , viewValue: 'Basic Engineering Science - 2'},
    {value: 'CHEMISTRY' , viewValue: 'Chemistry'},
    {value: 'ENGLISH' , viewValue: 'English'},
    {value: 'MATHS' , viewValue: 'Mathematics'},
    {value: 'PHYSICS' , viewValue: 'Physics'},
    {value: 'BUSINESS' , viewValue: 'Business School'},
    {value: 'COMMERCE' , viewValue: 'Commerce'},
    {value: 'HOTELMANAGEMENT' , viewValue: 'Hotel Management'},
    {value: 'ARCH' , viewValue: 'Architecture'},
    {value: 'PHARMACY' , viewValue: 'Pharmacy'},
    {value: 'MCA' , viewValue: 'Computer Applications'},
    {value: 'FA' , viewValue: 'Fine Arts'},
    {value: 'VC' , viewValue: 'Visual Communication'},
    {value: 'AGRICULTURE' , viewValue: 'Agriculture'},
    {value: 'LAW' , viewValue: 'Law'},
    {value: 'BDesign' , viewValue: 'B. Design'}
  ];
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required,Validators.email]],
        mobile: ['', [Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]],
        college: ['', Validators.required],
        current_year: ['',[ Validators.required]],
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
  
  branches(){
    if(this.selectedbranch==="Other"){
      this.field1=true;
      this.registerForm.controls['branch'].reset();
    }
    else{
      this.field1=false;
    }
  }

  studyYear(){
    if(this.selectedyear==="Other"){
      this.field2=true;
      this.registerForm.controls['current_year'].reset();
    }
    else{
      this.field2=false;
    }
  }
  register(){
    this.isLoad = true;
    this.openSnackBar('Validating...');
    this._service.register(this.registerForm.value)
    .subscribe(
      data => {
        this.openSnackBar('Almost Done...');
        this.router.navigate(['/login' , this.postregister]);
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
