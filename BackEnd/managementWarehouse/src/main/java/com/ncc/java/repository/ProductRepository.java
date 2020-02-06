package com.ncc.java.repository;

import com.ncc.java.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
   Product findOneById(Long id);

    Page<Product> findAllByOrderByIdDesc(Pageable pageable);

//    Product findOneById(Product product);
}
