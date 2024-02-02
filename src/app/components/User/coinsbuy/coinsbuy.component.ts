import { Component } from '@angular/core';
import { PaymentgatewayService } from 'src/app/services/gateway/paymentgateway.service';

@Component({
  selector: 'app-coinsbuy',
  templateUrl: './coinsbuy.component.html',
  styleUrls: ['./coinsbuy.component.css']
})
export class CoinsbuyComponent {

  constructor(private gatewayService:PaymentgatewayService){

  }
  
  buyCoins(){
    // this.gatewayService.payNow("kanishk","julupandit@gmail.com","6283659060", 45.5);
    this.gatewayService.initiatePayment();
  }

}

