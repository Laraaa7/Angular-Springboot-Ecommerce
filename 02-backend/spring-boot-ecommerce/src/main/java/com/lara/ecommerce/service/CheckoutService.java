package com.lara.ecommerce.service;

import com.lara.ecommerce.dto.PaymentInfo;
import com.lara.ecommerce.dto.Purchase;
import com.lara.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
