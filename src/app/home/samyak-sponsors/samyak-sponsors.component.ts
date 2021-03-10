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
      img: 'https://www.kluniversity.in/img/logo9.png',
      link: 'https://www.kluniversity.in' 
    },
    {
      img: 'https://dev.apnrts.ap.gov.in/home/our_president',
      link: 'https://www.kluniversity.in'
    }
  ];

  link(item){
    window.open(item , '__blank');
  }

}
