package com.codechallange.fizzbuzz.services.impl;

import com.codechallange.fizzbuzz.dto.ErrorResponseObject;
import com.codechallange.fizzbuzz.dto.ResponseObject;
import com.codechallange.fizzbuzz.services.FizzBuzzService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Optional;
import java.util.logging.Logger;

import static java.math.BigInteger.ZERO;

@Service
public class FizzBuzzServiceImpl implements FizzBuzzService {

    private static final Logger LOG = Logger.getLogger(FizzBuzzServiceImpl.class.getName());
    private final static BigInteger THREE = BigInteger.valueOf(3L);
    private final static BigInteger FIVE = BigInteger.valueOf(5L);
    private static final String FIZZ = "Fizz";
    private static final String BUZZ = "Buzz";

    @Override
    public ResponseEntity evaluate(String stringNumber) {
        LOG.info("Evaluating string number: " + stringNumber);

        BigInteger number;
        try {
            number = new BigInteger(stringNumber);
        } catch (NumberFormatException e) {
            LOG.severe("Expected number, got NumberFormatException: " + e.getMessage());
            return generateErrorMessage("Expected number, got " + stringNumber, HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(evaluate(number));
    }

    private ResponseObject evaluate(BigInteger number) {
        String result = Optional.of(number)
                .map(n -> (number.mod(THREE).equals(ZERO) ? FIZZ : "") + (number.mod(FIVE).equals(ZERO) ? BUZZ : ""))
                .get();

        ResponseObject responseObject = new ResponseObject();
        responseObject.setNumber(number);
        responseObject.setFizzbuzz(result.isEmpty() ? number.toString() : result);

        return responseObject;
    }

    private ResponseEntity generateErrorMessage(String errorMessage, HttpStatus httpStatus) {
        ErrorResponseObject error = new ErrorResponseObject();
        error.getErrors().add(errorMessage);
        LOG.severe(errorMessage);

        return ResponseEntity
                .status(httpStatus)
                .body(error);
    }
}
