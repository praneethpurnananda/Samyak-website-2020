import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _service: AdminServiceService) { }

  ngOnInit(): void {
    let token = this.route.snapshot.params['token'];
    console.log(token);

    this._service.verifyEmail(token)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
