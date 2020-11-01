import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _service: AdminServiceService) { }

  ngOnInit(): void {
    this._service.getNavbarEventData()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
