import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  backendService = environment.backendService;

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

}
