package com.company.store.controllers;

import com.company.store.mappers.ProductMapper;
import com.company.store.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ProductController {
    @Autowired
    private ProductMapper productMapper;

    @RequestMapping(value = "/feature_products", method = RequestMethod.GET)
    public ResponseEntity<Object> getFeatureProducts(@RequestParam int begin,
                                              @RequestParam int end) {
        ArrayList<Product> featureProducts = productMapper.sortByPrice(begin, end);
        return new ResponseEntity<>(
                    featureProducts,
                    HttpStatus.OK);
    }

    @RequestMapping(value = "/product_details/{productId}", method = RequestMethod.GET)
    public ResponseEntity<Object> getProductDetails(@PathVariable("productId") Long productId) {
        Product product = productMapper.findByProductId(productId);
        return new ResponseEntity<>(
                product,
                HttpStatus.OK
        );
    }


}

