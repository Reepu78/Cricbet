import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user/user.service';
import { userData } from 'src/app/interfaces/_user';
import { UserInformation } from 'src/app/helper/UserInformation';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private authService:AuthService,private user:UserService, private toast: NgToastService){}

  ngOnInit(): void {
    let usernameFromToken = this.authService.getUsernameFromToken();
    this.getUser(usernameFromToken);
    
  }
  test:any={};
  profileData:userData={
    username:'',
    name:'',
    email:'',
    mobile:''
    
  };
  Username:string="";
  
  getUser(username:string){
    this.user.getprofile(username).subscribe( res=>{
    this.test=res;

    this.Username = this.test.userinfo.username;

   this.profileData ={
      username:this.test.userinfo.username,
      name: this.test.userinfo.name,
      email: this.test.userinfo.email,
      mobile: this.test.userinfo.mobile
    }

    console.log(this.profileData );

    })
  }
  

  onUpdateProfile(){
    console.log(this.profileData.name);

    if(this.profileData.name!="" && this.profileData.email!="" && this.profileData.mobile!=""){

      if(this.profileData.mobile.length==10){
        this.user.updateProfile(this.profileData).subscribe({
          next:(response:any)=>{
            if(response.statusCode==200){
                  this.toast.success({detail:"SUCCESS",summary:response.message, duration:5000});
              }
    
              },
          error:(err)=>{
            this.toast.error({detail:"ERROR",summary:err.message,duration:5000});
          }
        })
      }else{
        this.toast.error({detail:"ERROR",summary: "Please enter correct mobile number",duration:5000});
      }
     
    }else{
      this.toast.error({detail:"ERROR",summary: "All fields are required",duration:5000});
    }

  }


      
  

}
