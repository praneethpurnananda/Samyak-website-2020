import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-post-payment',
  templateUrl: './post-payment.component.html',
  styleUrls: ['./post-payment.component.css']
})
export class PostPaymentComponent implements OnInit {

  constructor(private _service: AdminServiceService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    const payment_id = this.route.snapshot.queryParamMap.get('payment_id');
    console.log(payment_id);
  }

}
