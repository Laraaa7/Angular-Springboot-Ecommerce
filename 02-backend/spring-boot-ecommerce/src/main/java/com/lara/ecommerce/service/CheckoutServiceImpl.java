package com.lara.ecommerce.service;

import com.lara.ecommerce.dao.CustomerRepository;
import com.lara.ecommerce.dto.PaymentInfo;
import com.lara.ecommerce.dto.Purchase;
import com.lara.ecommerce.dto.PurchaseResponse;
import com.lara.ecommerce.entity.Customer;
import com.lara.ecommerce.entity.Order;
import com.lara.ecommerce.entity.OrderItem;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository,
                               @Value("${stripe.key.secret}") String secretKey) {
        this.customerRepository = customerRepository;

        // inicializar String con secretkey
        Stripe.apiKey = secretKey;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        // obtener la info de order de dto
        Order order = (Order) purchase.getOrder();

        // generar numero tracking
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        // llenar order con orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        // llenar order con billingAddress y shippingAddress
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        // llenar customer con order
        Customer customer =  purchase.getCustomer();

        // comprobar si hay un customer que exista
        String theEmail = customer.getEmail();

        Customer customerFromDB = customerRepository.findByEmail(theEmail);

        if (customerFromDB != null) {
            // lo hemos encontrado y lo asignamos correspondientemente
            customer = customerFromDB;
        }

        customer.add(order);

        // guardar en la bbdd
        customerRepository.save(customer);

        // devolver una respuesta
        return new  PurchaseResponse(orderTrackingNumber);
    }

    @Override
    public PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException {

        List<String> paymentMethodTypes = new ArrayList<>();
        paymentMethodTypes.add("card");

        Map<String, Object> params = new HashMap<>();
        params.put("amount",  paymentInfo.getAmount());
        params.put("currency", paymentInfo.getCurrency());
        params.put("payment_method_types", paymentMethodTypes);
        params.put("description", "Shop purchase");
        params.put("receipt_email", paymentInfo.getReceiptEmail());

        return PaymentIntent.create(params);
    }

    private String generateOrderTrackingNumber() {

        // generar un UUID random (UUID version-4)
        return UUID.randomUUID().toString();

    }
}
