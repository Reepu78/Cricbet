import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private username$ = new BehaviorSubject<string>("");
  private userId$ = new BehaviorSubject<number>(0);

  constructor() { }


  public getUsernameFromUserData(){
    return this.username$.asObservable();
  }
  public getUserIdFromUserData(){
    return this.userId$.asObservable();
  }
  public setUsernameForUserData(username:string){
    this.username$.next(username);
  }
  public setUserIdForUserData(userId:number){
    this.userId$.next(userId);
  }

  

 

}
