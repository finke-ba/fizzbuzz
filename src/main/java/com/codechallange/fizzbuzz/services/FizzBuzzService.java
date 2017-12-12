package com.codechallange.fizzbuzz.services;

import org.springframework.http.ResponseEntity;

public interface FizzBuzzService {
    ResponseEntity evaluate(String number);
}
