package com.oldparlorprints.ecommerce.dto;

import com.oldparlorprints.ecommerce.entity.Customer;
import com.oldparlorprints.ecommerce.entity.Address;
import com.oldparlorprints.ecommerce.entity.Order;
import com.oldparlorprints.ecommerce.entity.OrderItem;
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
