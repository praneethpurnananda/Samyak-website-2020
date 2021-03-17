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

  imageObject: Array<object> = [{
    video: 'https://youtu.be/6pxRHBw-k8M' // Youtube url
},
{
  video: '../../../assets/images/Regsitration200.png', // MP4 Video url
},
{
  video: '../../../assets/images/Regsitration200.png',
    posterImage: '../../../assets/images/Regsitration200.png', //Optional: You can use this key if you want to show video poster image in slider
    title: 'Image title'
},
{
  image: '../../../assets/images/Regsitration200.png',
    thumbImage: '../../../assets/images/Regsitration200.png',
    alt: 'Image alt'
}
];

  link(item){
    window.open(item , '__blank');
  }

}
