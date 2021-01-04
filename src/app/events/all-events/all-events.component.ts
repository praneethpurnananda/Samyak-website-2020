import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute , Router } from '@angular/router';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  events;
  myEvents;
  isLoggedIn:boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  msg;
  constructor(public dialog: MatDialog, private _service: AdminServiceService, private route:ActivatedRoute, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let id1 = this.route.snapshot.params['id1'];
    console.log(id1);
    let id2 = this.route.snapshot.params['id2'];
    console.log(id2)
    this._service.getEvents(id1,id2)
    .subscribe(
      data => {
        this.events =  data['events'],
        console.log(this.events)
      },
      error => console.log(error)
    );

    if(localStorage.getItem('client-token')){
      this._service.checkToken()
      .subscribe(
        data => {
          console.log(data);
          this.isLoggedIn = Boolean(data);
          if(this.isLoggedIn)
            this.myEve();
        },
        error => {
          console.log(error);
          this.isLoggedIn = false;
        }
      );
    }
    else{
      this.isLoggedIn = false;
    }

  }

  check(item){
    if(this.isLoggedIn)
      return !(this.myEvents.find(event => event._id == item._id));
    else
      return true
  }

  myEve(){
    this._service.getMyEvents()
    .subscribe(
      data => {
        console.log(data);
        this.myEvents = data
      },
      error => console.log(error)
    );
  }


  register(item){
    this.openSnackBar('Processing your request ... ');
    if(this.isLoggedIn){
      let tmp = {eventId: item._id};
      this._service.registerEvent(tmp)
      .subscribe(
        data => {
          this.openSnackBar('Thanks for registering  -Team Samyak');
          console.log(data);
          this.ngOnInit();
          this.openDialog('Successfully Registered');
        },
        error => {
          console.log(error);
          this.msg = error.error.message;
          this.openSnackBar(this.msg);
        }
      );
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  openDialog(item){
    const dialogRef = this.dialog.open(PostRegistrationEvents, {
      width: '900px',
      data: item,
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

 moreInfo(item){
   const dialogRef = this.dialog.open(MoreInfo, {
      width: '900px',
      data: item,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was closed");
      if (result) {
        this.ngOnInit();
      }
    });
 }

 openSnackBar(message: string) {
   this._snackBar.open(message , 'Close' ,{
       duration: 5000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
   });
 }

}



@Component({
  selector: 'more-info',
  templateUrl: 'more-info.html',
  styleUrls: ['./all-events.component.css']
})
export class MoreInfo {
  constructor(
   public dialogRef: MatDialogRef<MoreInfo>,
   @Inject(MAT_DIALOG_DATA) public data){  console.log(data);}

}

@Component({
  selector: 'post-registration',
  templateUrl: 'post-registration-events.html',
  styleUrls: ['./all-events.component.css']
})
export class PostRegistrationEvents{
  constructor(public dialogRef: MatDialogRef<PostRegistrationEvents>,
    @Inject(MAT_DIALOG_DATA) public data){
      console.log(data);
    }
}
