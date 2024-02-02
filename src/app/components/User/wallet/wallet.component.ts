import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  constructor(private toast: NgToastService,){}

  ngOnInit(): void {
  //  this.convertCoinsToRupees(10);
  //  this.convertRupeesToCoins(10)
    
  }

  coins :number =0;
  rupees:number = 0;
  upi:string = "";
  ischecked:boolean=false;

  convertCoinsToRupees(convertRate:number,coins:number){
    this.rupees = coins/convertRate;
    console.log(this.rupees);
  }

  convertRupeesToCoins(convertRate:number , rupees:number){
    this.coins = rupees*convertRate;
    console.log(this.coins);
  }


  onWithdraw(){
    const formData = {
      upi:this.upi,
      coins: this.coins,
      rupees: this.rupees,
      ischecked:this.ischecked
    };
    console.log(formData);
    

  }

}
