package com.codechallange.fizzbuzz.services.impl;

import com.codechallange.fizzbuzz.dto.ErrorResponseObject;
import com.codechallange.fizzbuzz.dto.ResponseObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigInteger;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FizzBuzzServiceImplTest {

    @Autowired
    private FizzBuzzServiceImpl fizzBuzzService;

    @Test
    public void evaluateWithOk() {
        ResponseObject expectedResponse = new ResponseObject();
        expectedResponse.setNumber(BigInteger.valueOf(123L));
        expectedResponse.setFizzbuzz("Fizz");

        ResponseEntity expected = ResponseEntity
                .status(HttpStatus.OK)
                .body(expectedResponse);

        assertThat(fizzBuzzService.evaluate("123").toString()).isEqualTo(expected.toString());
    }

    @Test
    public void evaluateWithBadRequest() {
        ErrorResponseObject expectedResponse = new ErrorResponseObject();
        expectedResponse.getErrors().add("Expected number, got asd");

        ResponseEntity expected = ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(expectedResponse);

        assertThat(fizzBuzzService.evaluate("asd").toString()).isEqualTo(expected.toString());
    }
}