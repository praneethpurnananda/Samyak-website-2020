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

  sponsors = [
    {
      img: 'https://media.gettyimages.com/photos/track-field-summer-olympics-usa-michael-johnson-in-action-during-mens-picture-id1207050710?k=6&m=1207050710&s=612x612&w=0&h=AohafbTMf4O9K2OVUMpzRIJeRgogSBWpLM_852BCyMA=',
      link: 'https://www.google.com' 
    },
  ];

  link(item){
    window.open(item , '__blank');
  }

}
