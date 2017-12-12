package com.codechallange.fizzbuzz.services.impl;

import com.codechallange.fizzbuzz.dto.ErrorResponseObject;
import com.codechallange.fizzbuzz.dto.ResponseObject;
import com.codechallange.fizzbuzz.services.FizzBuzzService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class FizzBuzzServiceImpl implements FizzBuzzService {

    private static final Logger LOG = Logger.getLogger(FizzBuzzServiceImpl.class.getName());

    @Override
    public ResponseEntity evaluate(String stringNumber) {
        LOG.info("Evaluating string number: " + stringNumber);

        int number;
        try {
            number = Integer.parseInt(stringNumber);
        } catch (NumberFormatException e) {
            LOG.severe("Expected number, got NumberFormatException: " + e.getMessage());
            return generateErrorMessage("Expected number, got " + stringNumber, HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(evaluate(number));
    }

    private ResponseObject evaluate(int number) {
        String result = Optional.of(number)
                .map(n -> (n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : ""))
                .get();

        ResponseObject responseObject = new ResponseObject();
        responseObject.setResponse(result.isEmpty() ? Integer.toString(number) : result);

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
