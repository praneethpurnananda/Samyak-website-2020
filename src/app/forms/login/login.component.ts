import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean = true;
  msg;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(){
    this._service.login(this.loginForm.value)
    .subscribe(
      data => {
        localStorage.setItem('token',data['token'].toString());
         this.router.navigate(['/']);
      },
      error =>  this.msg = error.error.message
    );
  }

  ngOnInit(): void {}

}
