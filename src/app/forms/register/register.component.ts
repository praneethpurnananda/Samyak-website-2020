import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router) {
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

  register(){
    this._service.register(this.registerForm.value)
    .subscribe(
      data => {
        this.router.navigate['/login']
      },
      error => console.log(error)
    );
  }

}
