import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: 'app-tech-talks',
  templateUrl: './tech-talks.component.html',
  styleUrls: ['./tech-talks.component.css']
})
export class TechTalksComponent implements OnInit {

  techtalks;
  constructor(private _service: AdminServiceService) { }

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

}
