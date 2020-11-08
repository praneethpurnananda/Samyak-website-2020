import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  events;
  myEvents;
  constructor(public dialog: MatDialog, private _service: AdminServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id1 = this.route.snapshot.params['id1'];
    console.log(id1);
    let id2 = this.route.snapshot.params['id2'];
    console.log(id2)
    this._service.getEvents(id1,id2)
    .subscribe(
      data => {this.events =  data['events'],console.log(this.events)},
      error => console.log(error)
    );

    this._service.getMyEvents()
    .subscribe(
      data => {
        console.log(data);
        this.myEvents = data
      },
      error => console.log(error)
    );

    this._service.checkToken()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  check(item){
    return !(this.myEvents.find(event => event._id == item._id));
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

 register(item){
   let tmp = {eventId: item._id};
   this._service.registerEvent(tmp)
   .subscribe(
     data => console.log(data),
     error => console.log(error)
   );
 }

}


//add new role
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
