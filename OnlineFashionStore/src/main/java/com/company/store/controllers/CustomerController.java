package com.company.store.controllers;

import com.company.store.mappers.CustomerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    private CustomerMapper customerMapper;

    @RequestMapping(value = "/get_user_by_id", method = RequestMethod.GET)
    public Object getUserById(@RequestParam Long customerId) {
        return customerMapper.findById(customerId);
    }
}
