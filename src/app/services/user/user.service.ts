import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from 'src/app/interfaces/_user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7024/api/";

  getprofile(username:string){
    return this.http.get(`${this.baseUrl}User/GetProfile?username=${username}`);
  }


  updateProfile(data:userData){
    return this.http.post(`${this.baseUrl}User/UpdateProfile`, data);
  }

  createUserWallet(username:string){
    return this.http.post(`${this.baseUrl}User/CreateWallet?username=${username}`, username);
  }

  getUserWallet(username:string){
    return this.http.get(`${this.baseUrl}User/GetWallet?username=${username}`);
  }


}
