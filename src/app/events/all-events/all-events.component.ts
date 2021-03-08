import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminServiceService } from "../../admin-service.service";
import { Router, ActivatedRoute } from '@angular/router';
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
  navbarEvents;
  hasDepartments = false;
  department;
  constructor(public dialog: MatDialog, private _service: AdminServiceService, private route:ActivatedRoute, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.hasDepartments = false;

    let id1 = this.route.snapshot.paramMap.get('id1');
    console.log(id1);
    let id2 = this.route.snapshot.paramMap.get('id2');
    console.log(id2)

    this._service.getNavbarEventData()
    .subscribe(
      data => {
        this.navbarEvents = data['events'],
        console.log(this.navbarEvents);
        if(id2 == 'all'){
          this.hasDepartments = true;
          this.navbarEvents = this.navbarEvents.find(x => x.type == id1);
          console.log(this.navbarEvents);
          this.department = id1;
        }
      },
      error => {
        console.log(error);
        this.hasDepartments = false;
      }
    );

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

  toEvent(eventType , department){
    this.router.navigate(['events/'+eventType+'/'+department]);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
      this.openSnackBar('Something went wrong .. please try logging in again .. ');
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

 viewSlots(item){
  const dialogRef = this.dialog.open(EventSlots, {
    width: '400px',
    data: item,
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log("dialog was closed");
  });
 }

}

@Component({
  selector: 'view-eventSlots',
  templateUrl: 'view-slots.html',
  styleUrls: ['./all-events.component.css']
})
export class EventSlots {
  constructor(
    public dialogRef: MatDialogRef<EventSlots>,
    @Inject(MAT_DIALOG_DATA) public data){
      console.log(data)
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
