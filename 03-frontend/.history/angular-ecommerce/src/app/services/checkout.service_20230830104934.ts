import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';
import { environment } from 'src/environments/environment.development';
import { PaymentInfo } from '../common/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private purchaseUrl = environment['oldParlorPrintsUrl'] + '/checkout/purchase';

  private paymentIntentUrl = environment['oldParlorPrintsUrl'] + '/checkout/payment-intent';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any>{
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }
}
