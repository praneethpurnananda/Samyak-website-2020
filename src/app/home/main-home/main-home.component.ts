import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  isLoading = true;
  isLoggedIn:boolean = false;
  phoneNumber
  emailId;
  socialMedia;
  samyakLogo;
  navbarEvents;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this._service.getNavbarEventData()
      .subscribe(
        data => {
          this.navbarEvents = data['events'],
          console.log(this.navbarEvents)
        },
        error => console.log(error)
      );

      this.phoneNumber = this._service.getPhoneNumber();
      this.emailId = this._service.getsamyakEmail();
      this.socialMedia = this._service.getSocialMediaLinks();
      this.samyakLogo = this._service.getHomeLogo();

      if(localStorage.getItem('client-token')){
        this._service.checkToken()
        .subscribe(
          data => {
            console.log(data);
            this.isLoggedIn = Boolean(data);
            this.isLoading = false;
          },
          error => {
            console.log(error);
            this.isLoggedIn = false;
            this.isLoading = false;
          }
        );
      }
      else{
        this.isLoggedIn = false;
        this.isLoading = false;
      }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message , 'Close' ,{
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
    });
  }

  logout(){
    localStorage.removeItem('client-token');
    this.ngOnInit();
    this.openSnackBar('Successfully LoggedOut...');
  }

  toEvent(eventType , department){
    this.router.navigate(['events/'+eventType+'/'+department]);
  }

  toSocialMedia(item){
    window.open(item.link , "__blank");
  }

}
