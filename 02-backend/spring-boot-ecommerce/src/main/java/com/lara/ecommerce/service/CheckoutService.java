package com.lara.ecommerce.service;

import com.lara.ecommerce.dto.Purchase;
import com.lara.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
