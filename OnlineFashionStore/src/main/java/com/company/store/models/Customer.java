package com.company.store.models;

public class Customer {
    private Long customerId;
    private String lastName;
    private String firstName;
    private String email;
    private String password;
    private String paymentMethod;
    private Integer paymentAccount;

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Customer() {

    }

    public Integer getAccount() {
        return paymentAccount;
    }

    public void setAccount(Integer paymentAccount) {
        this.paymentAccount = paymentAccount;
    }

}
