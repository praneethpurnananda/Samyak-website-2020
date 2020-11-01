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
  constructor(public dialog: MatDialog, private _service: AdminServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this._service.getEvents(id)
    .subscribe(
      data => this.events =  data['events'],
      error => console.log(error)
    );
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
