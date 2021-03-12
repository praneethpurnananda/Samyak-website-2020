import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  backendService = environment.backendService;
  homeLogo = "../assets/images/main-logo1.png";
  blueLogo = '../assets/ui-images/samyak-bluelogo.png';
  chatBotbg = "../assets/ui-images/chatbot-img.svg";
  formImg = "../assets/ui-images/form.svg";
  phoneNumber = "7095083900";
  samyakEmail = "samyak@kluniversity.in";
  socialMediaLinks = [
    {title: 'Facebook' , link: 'https://www.facebook.com/kl.samyak/' , icon: 'fab fa-facebook-f'},
    {title: 'Twitter' , link: 'https://twitter.com/klusamyak?lang=en' , icon: "fab fa-twitter"},
    {title: 'LinkedIn' , link: 'https://www.linkedin.com/school/samyak-kluniversity/' , icon: "fab fa-linkedin"},
    {title: 'Instagram' , link: 'https://www.instagram.com/kl_samyak/?hl=en' , icon: "fab fa-instagram"},
    {title: 'Youtube' , link: 'https://www.youtube.com/channel/UCPrOyzURgK0t6qVVeKWUcaQ' , icon: "fab fa-youtube"}
  ];

  constructor(private _http: HttpClient) { }

  login(body: any){
    return this._http.post(this.backendService+'/users/login', body,{
        observe: 'body'
    });
  }

  register(body: any){
    return this._http.post(this.backendService+'/users/register', body,{
        observe: 'body'
    });
  }

  checkToken():Observable<object>{
    return this._http.get(this.backendService+'/users/check-token', {
      headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  forgotpassword(body: any){
    return this._http.post(this.backendService+'/users/forgot-password', body,{
        observe: 'body'
    });
  }

  verifyPasswordToken(body: any){
    return this._http.post(this.backendService+'/users/check-token', body,{
        observe: 'body'
    });
  }

  resetPassword(body: any){
    return this._http.post(this.backendService+'/users/change-password', body,{
        observe: 'body'
    });
  }

  getEvents(id1,id2){
    return this._http.get(this.backendService+'/events/get-events', {
      params: new HttpParams().append('event_department', id2).append('event_type', id1),
    });
  }

  getNavbarEventData(){
    return this._http.get(this.backendService+'/events/event-types');
  }

  verifyEmail(token){
    return this._http.get(this.backendService+'/users/verify/'+token);
  }

  createRequest(){
    return this._http.get(this.backendService+'/payments/create-request', {
       headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  postPayment(body: any){
    // console.log("called");
    // console.log(localStorage.getItem('client-token'));
    return this._http.post(this.backendService+'/payments/add-payment', body,{
        observe: 'body',
        headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  getTechTalks():Observable<object>{
    return this._http.get(this.backendService+'/techtalks/get-talks');
  }

  registerEvent(body: any){
    return this._http.post(this.backendService+'/register/event-register', body,{
        observe: 'body',
        headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  getMyEvents():Observable<object>{
    return this._http.get(this.backendService+'/register/user-events', {
      headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  undoEvent(body: any){
    return this._http.post(this.backendService+'/register/event-unregister', body,{
      observe: 'body',
      headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }

  getUserDetails():Observable<object>{
    return this._http.get(this.backendService+'/users/details', {
      headers: new HttpHeaders().append('x-access-token', localStorage.getItem('client-token'))
    });
  }




  //LOCAL MEDIA
  getHomeLogo(){
    return this.homeLogo;
  }

  getBlueLogo(){
    return this.blueLogo;
  }

  getChatBotbg(){
    return this.chatBotbg;
  }

  getFomrbg(){
    return this.formImg;
  }

  getPhoneNumber(){
    return this.phoneNumber;
  }

  getsamyakEmail(){
    return this.samyakEmail;
  }

  getSocialMediaLinks(){
    return this.socialMediaLinks;
  }
}
