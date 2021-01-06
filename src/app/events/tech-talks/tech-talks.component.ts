import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MoreInfo } from "../all-events/all-events.component";

@Component({
  selector: 'app-tech-talks',
  templateUrl: './tech-talks.component.html',
  styleUrls: ['./tech-talks.component.css']
})
export class TechTalksComponent implements OnInit {

  techtalks;
  constructor(private _service: AdminServiceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this._service.getTechTalks()
    .subscribe(
      data => {
        console.log(data);
        this.techtalks = data['talks'];
      },
      error => console.log(error)
    );
  }

  readMore(item){
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
