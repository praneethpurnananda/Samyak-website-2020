import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedcollege:string;
  field=false;
  registerForm: FormGroup;
  gender = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];
  branch = [
    {value: 'CSE', viewValue: 'Cse'},
    {value: 'ECE', viewValue: 'Ece'},
    {value: 'CIVIL', viewValue: 'Civil'}
  ];
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required,Validators.email]],
        mobile: ['', Validators.required],
        college: ['', Validators.required],
        current_year: ['', Validators.required],
        branch: ['', Validators.required],
        college_id: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }
  college(){
    if(this.selectedcollege===""){
      this.field=true;
    }
    else{
      this.field=false;
    }
  }
  register(){
    this._service.register(this.registerForm.value)
    .subscribe(
      data => {
        console.log(data),
        this.router.navigate(['/login'])
      },
      error => console.log(error)
    );
  }

}
