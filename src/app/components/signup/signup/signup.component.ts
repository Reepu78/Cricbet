import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Route, Router } from '@angular/router';
import { UserInformation } from 'src/app/helper/UserInformation';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserInformation]
})
export class SignupComponent {

  constructor(private authService:AuthService, private userService:UserService, private toast: NgToastService, private router : Router, private userdata: UserInformation) {}

  isAccountCreated:boolean = false;
  displaying:string = "";
  repeatpass:string = "";

  ngOnInit(): void {
    var isLogged = this.authService.isLoggedIn();
    if(isLogged==true){
      this.router.navigate(['']);
    }
  }
    
  
  registerForm =  new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    username: new FormControl("",[Validators.required, Validators.minLength(6)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    cpassword: new FormControl("",[Validators.required, Validators.minLength(6)]),
    checkbox: new FormControl(false,[Validators.required]),
  });

  

  onSignUp(){

    console.log(this.registerForm);
    
    if(this.Password.value == this.Cpassword.value){
      this.authService.onSignUpButtonClicked([
      this.Name.value,
      this.Username.value,
      this.Email.value,
      this.Mobile.value,
      this.Password.value

      ]).subscribe(
        {
          next:(res:any)=>{
              
              
              this.userService.createUserWallet(this.Username.value).subscribe(
                {
                  next:(createresponse:any)=>{
                    debugger
                    this.router.navigate(['signin']);
                    this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});
                  },
                  error:(res:any)=>{
                    this.toast.error({detail:"ERROR",summary:res.message,duration:5000});
                    this.router.navigate(['signup']);
                  }
                }
              );
             
            },
          error:(res:any)=>{
            this.toast.error({detail:"ERROR",summary:res.message,duration:5000});
            this.router.navigate(['signup']);
          }
        })
    }else{
      this.repeatpass = 'inline';
    }

    
  }

  get Name():FormControl{
    return this.registerForm.get("name") as FormControl;
  }

  get Username():FormControl{
    return this.registerForm.get("username") as FormControl;
  }

  get Email():FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile():FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }

  get Password():FormControl{
    return this.registerForm.get("password") as FormControl;
  }

  get Cpassword():FormControl{
    return this.registerForm.get("cpassword") as FormControl;
  }

  get Checkbox():FormControl{
    return this.registerForm.get("checkbox") as FormControl;
  }


}

 


