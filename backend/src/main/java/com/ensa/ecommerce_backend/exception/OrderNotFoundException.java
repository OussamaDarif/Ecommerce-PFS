package com.ensa.ecommerce_backend.exception;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(){}
    public OrderNotFoundException(String message) {super(message);}

}
