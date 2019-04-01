package com.company.store.controllers;

import com.company.store.mappers.ProductMapper;
import com.company.store.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;

@RestController
public class ProductController {
    @Autowired
    private ProductMapper productMapper;

    @RequestMapping(value = "/get_items", method = RequestMethod.GET)
    public ResponseEntity<Object> getUserById(@RequestParam String by,
                                              @RequestParam boolean ascending,
                                              @RequestParam int amount) {
        HashMap<Integer, Product> result = new HashMap<>();
        if (by.equals("Price")) {
            String criterion = ascending ? "ASC" : "DESC";
            ArrayList<Product> products = productMapper.sortByPrice(by, criterion, amount);
            for (int i = 0; i < products.size(); i++) {
                System.out.println(products.get(i).getPrice());
                result.put(i, products.get(i));
            }
            return new ResponseEntity<>(
                    result,
                    HttpStatus.OK);
        } else {
            return new ResponseEntity<Object>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
