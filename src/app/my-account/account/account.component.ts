import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
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
  constructor(private _service: AdminServiceService, private _snackBar: MatSnackBar) { }

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

}
