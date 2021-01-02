import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute , Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-validating-user',
  templateUrl: './validating-user.component.html',
  styleUrls: ['./validating-user.component.css']
})
export class ValidatingUserComponent implements OnInit {

  isLoad:boolean = false;
  msg = "Processing Your Request";
  constructor(private _service: AdminServiceService , private route: ActivatedRoute , private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoad = true;
    this.openSnackBar('Processing your request....');
    this._service.createRequest()
    .subscribe(
      data => {
        this.openSnackBar('Almost Done...');
        console.log(data);
        let longUrl = data['request'];
        console.log(longUrl);
        window.location.href = longUrl.longurl;
        this._snackBar.dismiss();
        this.isLoad = false;
      },
      error => {
        this.isLoad = false;
        console.log(error);
        this.msg = error.error.message;
        this.openSnackBar('Oops something went wrong...');
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 3000);
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

}