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

  constructor() { }

  ngOnInit(): void {
  }

  sponsors = [
    {
      img: 'https://dev.apnrts.ap.gov.in/HomeAssets/images/apnrts-logo.png',
      link: 'https://dev.apnrts.ap.gov.in/home/our_president'
    },
    {
      img: 'https://image1.jdomni.in/storeLogo/02042020/E2/C2/53/0B44DB157E9E0C68F057C2B88D_1585832325526.png?output-format=webp',
      link: 'https://dev.apnrts.ap.gov.in/home/our_president'
    },
    {
      img: 'https://static.wixstatic.com/media/18dea7_5f0a405728cd42e9927496a0cb504071~mv2.png/v1/crop/x_0,y_0,w_432,h_361/fill/w_268,h_223,al_c,q_85,usm_0.66_1.00_0.01/Younify.webp',
      link: 'https://dev.apnrts.ap.gov.in/home/our_president'
    }
  ];

  link(item){
    window.open(item , '__blank');
  }

  // techtalks;
  // constructor(private _service: AdminServiceService,public dialog: MatDialog) { }

  // ngOnInit(): void {
  //   this._service.getTechTalks()
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //       this.techtalks = data['talks'];
  //     },
  //     error => console.log(error)
  //   );
  // }

  // readMore(item){
  //   const dialogRef = this.dialog.open(MoreInfo, {
  //     width: '900px',
  //     data: item,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log("dialog was closed");
  //     if (result) {
  //       this.ngOnInit();
  //     }
  //   });
  // }

}
