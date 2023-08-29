package com.oldparlorprints.ecommerce.service;

import com.oldparlorprints.ecommerce.dto.PaymentInfo;
import com.oldparlorprints.ecommerce.dto.Purchase;
import com.oldparlorprints.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
