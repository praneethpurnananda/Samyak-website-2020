import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-post-payment',
  templateUrl: './post-payment.component.html',
  styleUrls: ['./post-payment.component.css']
})
export class PostPaymentComponent implements OnInit {

  status = "Validating ... ";
  constructor(private _service: AdminServiceService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    const payment_id = this.route.snapshot.queryParamMap.get('payment_id');
    const payment_status = this.route.snapshot.queryParamMap.get('payment_status');
    const payment_request_id = this.route.snapshot.queryParamMap.get('payment_request_id');

    let tmp   = {payment_id: payment_id , payment_status: payment_status , payment_request_id: payment_request_id};
    this._service.postPayment(tmp)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );

    if(payment_status == "Credit")
      this.status = "Payment Successfull";
    else
      this.status = "Payment Failed"
  }

}
