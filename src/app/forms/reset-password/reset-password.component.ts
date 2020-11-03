import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import { Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css' , '../login/login.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPassword: FormGroup;
  hide: boolean = true;
  token;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router,private route: ActivatedRoute) {
    this.resetPassword = this.fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let token = this.route.snapshot.params['token'];
    this.token = token;
    let tk = {token: token};
    this._service.verifyPasswordToken(tk)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    )

  }

  submit(){
    console.log('clicked');
    let tmp = {token: this.token , password: this.resetPassword.value.password};
    console.log(tmp);
    this._service.resetPassword(tmp)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
