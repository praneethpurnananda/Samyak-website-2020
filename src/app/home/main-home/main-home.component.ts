import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  constructor(private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
      this._service.getNavbarEventData()
      .subscribe(
        data => {
          this.navbarEvents = data['events']
          // console.log(this.navbarEvents)
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
            // console.log(data);
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
    // console.log('inside call');
    this.router.navigate(['events/'+eventType+'/'+department]);
  }

  toSocialMedia(item){
    window.open(item.link , "__blank");
  }

  listEvents(){
    const dialogRef = this.dialog.open(MobileNav, {
      width: '500px',
      data: this.navbarEvents,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("Closed");
    });
  }

}

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.html',
  styleUrls: ['./main-home.component.css']
})
export class MobileNav {
  constructor(private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<MobileNav> , @Inject(MAT_DIALOG_DATA) public data){}
  onNoClick(): void { this.dialogRef.close(); }

  toEvent(eventType , department){
    this.router.navigate(['events/'+eventType+'/'+department]);
  }
}

// @Component({
//   selector: 'guidelines',
//   templateUrl: './guidelines.html',
//   styleUrls: ['./main-home.component.css']
// })
// export interface PeriodicElement {
//   position: number;
//   Event:string;
//   Depatment:string;
//   Date:Date;
//   Time:string;
//   Contact:string;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {{position: 1, Event: 'Hydrogen', weight: 1.0079, symbol: 'H'}}
// ]
// export class Guidelines {
//   constructor(private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<Guidelines> , @Inject(MAT_DIALOG_DATA) public data){}
//   displayedColumns: string[] = ['position', 'Event', 'Department', 'Date','Time','Contact','Description'];
//   dataSource = ;
// }
