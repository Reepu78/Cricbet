import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islogged:boolean = false;

  public username:string = ""
  public userCoins:number = 0;

  constructor(private authService:AuthService, private router:Router,private toast: NgToastService, private userDataService:UserDataService,private userService:UserService){}

  
  ngOnInit() {
    this.islogged  = this.authService.isLoggedIn();

    this.userDataService.getUsernameFromUserData().subscribe(val=>{
      let usernameFromToken = this.authService.getUsernameFromToken();
      this.username = val || usernameFromToken;
    })

    if(this.islogged==true){
      this.userService.getUserWallet(this.username).subscribe({
        next:(res:any)=>{
          this.userCoins=res.userWallet.coins;
        },
        error:(res:any)=>{
          this.toast.error({detail:"ERROR",summary:res.message,duration:5000});
        }
      })
    }

  }


  onLogOut(){
    this.authService.isLogOut();
  }

}
