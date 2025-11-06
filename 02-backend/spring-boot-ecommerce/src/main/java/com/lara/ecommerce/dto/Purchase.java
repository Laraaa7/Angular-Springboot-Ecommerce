package com.lara.ecommerce.dto;

import com.lara.ecommerce.entity.Address;
import com.lara.ecommerce.entity.Customer;
import com.lara.ecommerce.entity.Order;
import com.lara.ecommerce.entity.OrderItem;
import lombok.Data;


import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
