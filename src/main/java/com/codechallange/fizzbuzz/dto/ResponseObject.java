package com.codechallange.fizzbuzz.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigInteger;

public class ResponseObject {
    @JsonProperty
    private BigInteger number;
    @JsonProperty
    private String fizzbuzz;

    public BigInteger getNumber() {
        return number;
    }

    public void setNumber(BigInteger number) {
        this.number = number;
    }

    public String getFizzbuzz() {
        return fizzbuzz;
    }

    public void setFizzbuzz(String fizzbuzz) {
        this.fizzbuzz = fizzbuzz;
    }
}
