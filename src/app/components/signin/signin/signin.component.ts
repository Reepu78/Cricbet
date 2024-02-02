import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserInformation } from 'src/app/helper/UserInformation';
import { userProfile } from 'src/app/interfaces/_user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserInformation]
})
export class SigninComponent {

  constructor(private userData:UserInformation, private authService:AuthService, private router:Router, private toast: NgToastService, ){}
  LoginForm:any = this.userData.Form;
  Username:any = this.userData.Username
  Password:any = this.userData.Password
  repeatpass:string = "";

  UserInformation:userProfile = {
    email:"",
    id:0,
    mobile:"",
    name:"",
    role:"",
    username:""
  };

  ngOnInit() {
    var isLogged = this.authService.isLoggedIn();
    if(isLogged==true){
      this.router.navigate(['']);
    }
    
  }


  onSignIn(){

    console.log(this.userData.Form);
    
    if(this.Username.value!= null && this.Username.value!="" || this.Password.value != null && this.Password.value!="" ){
      this.authService.onSignInButtonClicked([
      this.Username.value,
      this.Password.value

       ]).subscribe({
        next:(response:any)=>{

          debugger
          if(response.statusCode==200){
                this.authService.setToken(response.token);
                this.UserInformation = response.userInformation;
                console.log(this.UserInformation );
                this.toast.success({detail:"SUCCESS",summary:response.message, duration:5000});
                this.router.navigate(['']);
                window.location.reload();

                
                
              }

            },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err.Message,duration:5000});
          this.router.navigate(['signIn']);
        }
      }
      
      )
    }else{
      this.repeatpass = 'inline';
    }

    
  }
}
