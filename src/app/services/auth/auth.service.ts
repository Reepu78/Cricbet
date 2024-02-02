import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private router:Router) { 
  this.userPayload = this.decodeToken();
  }

  baseUrl = "https://localhost:7024/api/";
  private userPayload:any;

  onSignUpButtonClicked(user:Array<string>){
    return this.http.post(this.baseUrl + "Auth/Signup",{
      Name:user[0],
      Username:user[1],
      Email:user[2],
      Mobile:user[3],
      Password:user[4],
      });
  }


  onSignInButtonClicked(user:Array<string>){
    return this.http.post(this.baseUrl+ "Auth/Login",{
      Username:user[0],
      Password:user[1],
      });
  }

  setToken(token:string){
    localStorage.setItem("access_token", token);
  }

  isLoggedIn():boolean{
   return localStorage.getItem("access_token")? true : false;
  }


  getToken(){
    return localStorage.getItem("access_token");
   }

  isLogOut(){
    localStorage.clear();
    this.router.navigate(['signin']); 
    window.location.reload();

   }


  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }


  getUsernameFromToken(){
    if(this.userPayload)
    return this.userPayload.unique_name;
  }

  getUserIdFromToken(){
    if(this.userPayload)
    return this.userPayload.nameid;
  }

}
