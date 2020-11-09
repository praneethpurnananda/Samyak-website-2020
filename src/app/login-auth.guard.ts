import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from './admin-service.service'

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private _service: AdminServiceService , private router: Router){}

  async canActivate(){
    if(localStorage.getItem('client-token')){
      const tmp = await this._service.checkToken().toPromise();
      if(tmp)
        return true
      else{
        this.router.navigate(['/login']);
        return false
      }
    }
    else{
      this.router.navigate(['/login']);
      return false
    }
  }

}
