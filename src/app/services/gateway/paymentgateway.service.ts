import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

declare var Razorpay:any;

@Injectable({
  providedIn: 'root'
})
export class PaymentgatewayService {

  private razorpayOptions: any;

  constructor(private router:Router) { 
    this.razorpayOptions = {
      key:'rzp_test_1fDTT8mwX786wm', 
      amount: 10000, // Amount in paise (e.g., 10000 paise = INR 100)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Purchase Description',
      image: '',
      order_id: '', // You'll get this from your server after creating an order
      handler: this.paymentHandler.bind(this),
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#F37254',
      },
    };

  }

  initiatePayment() {
    const rzp = new Razorpay(this.razorpayOptions);
    rzp.open();
  }


  private paymentHandler(response: any) {
    debugger
    this.router.navigate(['']);
    console.log('Payment ID:', response.razorpay_payment_id);
    
    // You can use the payment ID as needed in your Angular application
  }

  

}
