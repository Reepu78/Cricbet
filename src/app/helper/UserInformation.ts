import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserInformation {

    
  Form =  new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    username: new FormControl("",[Validators.required, Validators.minLength(6)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    cpassword: new FormControl("",[Validators.required, Validators.minLength(6)]),
    checkbox: new FormControl(false,[Validators.required]),
  });



  // profile = new FormGroup({
  //   name: new FormControl("", [Validators.required, Validators.minLength(2)]),
  //   email: new FormControl("",[Validators.required, Validators.email]),
  //   mobile: new FormControl("",[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]),
  // })

 
 
 get Name():FormControl{
    return this.Form.get("name") as FormControl;
  }

  get Username():FormControl{
    return this.Form.get("username") as FormControl;
  }

  get Email():FormControl{
    return this.Form.get("email") as FormControl;
  }

  get Mobile():FormControl{
    return this.Form.get("mobile") as FormControl;
  }

  get Password():FormControl{
    return this.Form.get("password") as FormControl;
  }

  get Cpassword():FormControl{
    return this.Form.get("cpassword") as FormControl;
  }

  get Checkbox():FormControl{
    return this.Form.get("checkbox") as FormControl;
  }

  convertRupeesToCoins(convertRate:number,rupees:number,):number{
    const coins = rupees*convertRate;
    return coins;
}


}