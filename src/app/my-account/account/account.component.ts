import { Component, OnInit, Inject} from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar , MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  myEvents;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  noconent = false;
  constructor(private _service: AdminServiceService, private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    this._service.getMyEvents()
    .subscribe(
      data => {
        console.log(data);
        this.myEvents = data
        if (this.myEvents.length==0)
          this.noconent = true;
      },
      error => {
        this.noconent = false;
        console.log(error)
      }
    );
  }

  undo(item){
    this.openSnackBar('Processing your request ...');
    let tmp  = {eventId: item._id};
    this._service.undoEvent(tmp)
    .subscribe(
      data => {
      this.ngOnInit();
      this.openSnackBar('Successfully Unregistered');
    },
    error => {
      console.log(error);
      this.openSnackBar(error.error.message);
    }
    );
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
  styleUrls: ['././account.component.css']
})
export class EventSlots {
  constructor(
    public dialogRef: MatDialogRef<EventSlots>,
    @Inject(MAT_DIALOG_DATA) public data){
      console.log(data)
    }
}
