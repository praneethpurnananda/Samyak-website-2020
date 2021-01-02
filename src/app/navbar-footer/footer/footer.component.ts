import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialMedia;
  constructor(private _service: AdminServiceService) { }

  ngOnInit(): void {
    this.socialMedia = this._service.getSocialMediaLinks();
  }

  toSocialMedia(item){
    window.open(item.link , "__blank");
  }

}
