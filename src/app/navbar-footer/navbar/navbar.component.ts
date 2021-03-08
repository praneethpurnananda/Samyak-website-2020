import { Component, OnInit, Inject} from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { Router } from '@angular/router';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' , '../../home/main-home/main-home.component.css']
})
export class NavbarComponent implements OnInit {

  logo;
  navbarEvents;
  isLoading = true;
  isLoggedIn:boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _service: AdminServiceService,private router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    this._service.getNavbarEventData()
    .subscribe(
      data => {this.navbarEvents = data['events'],console.log(this.navbarEvents)},
      error => console.log(error)
    );

    this.logo = this._service.getHomeLogo();

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
          this.isLoading = false;
          this.isLoading = false;
        }
      );
    }
    else{
      this.isLoggedIn = false;
      this.isLoading = false;
    }
  }

  logout(){
    localStorage.removeItem('client-token');
    this.ngOnInit();
    this.openSnackBar('Successfully LoggedOut...');
  }


  toEvent(eventType , department){
    console.log('inside call');
    this.router.navigate(['events/'+eventType+'/'+department]);
  }


  openSnackBar(message: string) {
    this._snackBar.open(message , 'Close' ,{
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
    });
  }

  listEvents(){
    const dialogRef = this.dialog.open(SecondNav, {
      width: '500px',
      data: this.navbarEvents,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed");
    });
  }

}

//component
@Component({
  selector: 'second-nav',
  templateUrl: './second-nav.html',
  styleUrls: ['./navbar.component.css']
})
export class SecondNav {
  constructor(private _service: AdminServiceService,private router: Router, public dialogRef: MatDialogRef<SecondNav> , @Inject(MAT_DIALOG_DATA) public data){}
  onNoClick(): void { this.dialogRef.close(); }

  toEvent(eventType , department){
    this.router.navigate(['events/'+eventType+'/'+department]);
  }
}
