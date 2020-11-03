import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-validating-user',
  templateUrl: './validating-user.component.html',
  styleUrls: ['./validating-user.component.css']
})
export class ValidatingUserComponent implements OnInit {

  constructor(private _service: AdminServiceService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this._service.createRequest()
    .subscribe(
      data => {
        console.log(data);
        let longUrl = data['request'];
        console.log(longUrl);
        window.location.href = longUrl.longurl
      },
      error => console.log(error)
    );
  }

}
