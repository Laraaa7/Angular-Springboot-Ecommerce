package com.lara.ecommerce.service;

import com.lara.ecommerce.dao.CustomerRepository;
import com.lara.ecommerce.dto.Purchase;
import com.lara.ecommerce.dto.PurchaseResponse;
import com.lara.ecommerce.entity.Customer;
import com.lara.ecommerce.entity.Order;
import com.lara.ecommerce.entity.OrderItem;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
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
        customer.add(order);

        // guardar en la bbdd
        customerRepository.save(customer);

        // devolver una respuesta
        return new  PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {

        // generar un UUID random (UUID version-4)
        return UUID.randomUUID().toString();

    }
}
