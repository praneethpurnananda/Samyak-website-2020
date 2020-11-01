import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  isLoggedin = false;
  phoneNumber:string = "1-000-000-0000";
  emialId:string = "samya@kluniversity.in";
  socialMedia = [
    {title: "Facebook" , link: "" , icon: 'fab fa-facebook-f'},
    {title: "Twitter" , link: "" , icon: "fab fa-twitter"},
    {title: "Youtube" , link: "" , icon: "fab fa-youtube"},
    {title: "Instagram" , link: "" , icon: "fab fa-instagram"}
  ];
  samyakLogo = "..../../assets/images/nav-logo.png";
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      this.isLoggedin =  true;
    else
      this.isLoggedin = false;
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedin = false;
  }

}
