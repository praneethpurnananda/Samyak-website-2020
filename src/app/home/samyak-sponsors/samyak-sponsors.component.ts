import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samyak-sponsors',
  templateUrl: './samyak-sponsors.component.html',
  styleUrls: ['./samyak-sponsors.component.css']
})
export class SamyakSponsorsComponent implements OnInit {

  constructor() { }
  width:number = window.innerWidth;
  sizes = {width: '100%',height:'80%'}
  ngOnInit() : void {
     if(this.width<=760){
      this.sizes= {width: '100%',height:'400'}
     }
     if(this.width<=450){
      this.sizes= {width: '100%',height:'300'}
     }
  }
 

  imageObject: Array<object> = [
{
  image: '../../../assets/images/WebsiteBanner-Saketh.jpg',
    thumbImage: '../../../assets/images/WebsiteBanner-Saketh.jpg',
    alt: 'Image alt'
},
{
  image: '../../../assets/images/Suhas.jpg',
    thumbImage: '../../../assets/images/Suhas.jpg',
    alt: 'Image alt'
},
{
  image: '../../../assets/images/TechnicalPartners.jpg',
    thumbImage: '../../../assets/images/TechnicalPartners.jpg',
    alt: 'Image alt'
},
{
  image: '../../../assets/images/MainBanner.jpg',
    thumbImage: '../../../assets/images/MainBanner.jpg',
    alt: 'Image alt'
},
{
  image: '../../../assets/images/Sponsors.jpg',
    thumbImage: '../../../assets/images/Sponsors.jpg',
    alt: 'Image alt'
}
];

  link(item){
    window.open(item , '__blank');
  }

}
