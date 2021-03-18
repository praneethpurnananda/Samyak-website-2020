import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samyak-sponsors',
  templateUrl: './samyak-sponsors.component.html',
  styleUrls: ['./samyak-sponsors.component.css']
})
export class SamyakSponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [
{
  image: '../../../assets/images/WebsiteBanner-Saketh.jpg',
    thumbImage: '../../../assets/images/WebsiteBanner-Saketh.jpg',
    alt: 'Image alt'
}
];

  link(item){
    window.open(item , '__blank');
  }

}
