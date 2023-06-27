package com.oldparlorprints.ecommerce.dao;

import com.oldparlorprints.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

//Entity is Product, Primary Key is Long
public interface ProductRepository extends JpaRepository<Product, Long> {
}
