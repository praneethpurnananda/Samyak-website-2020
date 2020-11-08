import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  myEvents;
  constructor(private _service: AdminServiceService) { }

  ngOnInit(): void {
    this._service.getMyEvents()
    .subscribe(
      data => {
        console.log(data);
        this.myEvents = data
      },
      error => console.log(error)
    );
  }

  undo(item){
    let tmp  = {eventId: item._id};
    this._service.undoEvent(tmp)
    .subscribe(
      data => {
      console.log(data);
      this.ngOnInit();
    },
    error => console.log(error)
  );
  }

}
