import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService:AuthService, private router:Router, private toast:NgToastService){

  }

  canActivate(): boolean{
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.toast.error({detail:"ERROR",summary:"Please LoginFirst",duration:5000});
      this.router.navigate(['signin'])
      return true;
    }
    
  }
  
}
