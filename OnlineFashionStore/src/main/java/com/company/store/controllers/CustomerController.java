package com.company.store.controllers;

import com.company.store.mappers.CustomerMapper;
import com.company.store.models.Customer;
import org.apache.ibatis.annotations.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
public class CustomerController {
    @Autowired
    private CustomerMapper customerMapper;

    private static HashMap<Integer, Long> sessions;

    static {
        sessions = new HashMap<>();
    }

    @RequestMapping(value = "/get_user_by_id", method = RequestMethod.GET)
    public Object getUserById(@RequestParam Long customerId) {
        return customerMapper.findById(customerId);
    }


    @RequestMapping(value = "/customer_login", method = RequestMethod.POST)
    public ResponseEntity<Object> customerLogin(@RequestBody Map<String, Object> params){
        String email = params.get("email").toString();
        String password = params.get("password").toString();
        if (customerMapper.findByEmailPassword(email, password) == true) {
            Customer customer = customerMapper.findByEmail(email);
            int sessionId = sessions.size();
            sessions.put(sessionId, customer.getCustomerId());
            return new ResponseEntity<>(Integer.toString(sessionId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("-1", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/customer_details/{sessionId}", method = RequestMethod.GET)
    public ResponseEntity<Object> getCustomerBySessionId(@PathVariable("sessionId") int sessionId) {
        Long customerId = sessions.get(sessionId);
        Customer customer = customerMapper.findByCustomerId(customerId);
        return new ResponseEntity<>(
                customer,
                HttpStatus.OK
        );
    }

}
