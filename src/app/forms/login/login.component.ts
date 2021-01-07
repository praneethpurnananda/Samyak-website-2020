import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { AdminServiceService } from "../../admin-service.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean = true;
  msg;
  logo;
  bgImg;
  isLoad:boolean = false;
  isPostReg:boolean = false;
  constructor(private fb: FormBuilder,private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar,private route:ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.isPostReg = false;
    this.isLoad = true;
    this.openSnackBar('Validating...');
    this._service.login(this.loginForm.value)
    .subscribe(
      data => {
        this.openSnackBar('Almost Done...');
         localStorage.setItem('client-token',data['token'].toString());
         this.router.navigate(['/']);
         this.isLoad = false;
         this._snackBar.dismiss();
      },
      error =>  {
        this.msg = error.error.message;
        this.openSnackBar('Oops Login Failed ...');
        this.isLoad = false;
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 3000);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.isLoad = false;
    this.logo = this._service.getBlueLogo();
    this.bgImg = this._service.getChatBotbg();

    if(id == 'postregsiter')
      this.isPostReg = true
    else
      this.isPostReg = false
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
