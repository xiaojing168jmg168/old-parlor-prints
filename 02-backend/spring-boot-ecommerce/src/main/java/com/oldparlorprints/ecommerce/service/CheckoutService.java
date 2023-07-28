package com.oldparlorprints.ecommerce.service;

import com.oldparlorprints.ecommerce.dto.Purchase;
import com.oldparlorprints.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);

}
