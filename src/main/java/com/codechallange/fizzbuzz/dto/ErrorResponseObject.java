package com.codechallange.fizzbuzz.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class ErrorResponseObject {
    @JsonProperty
    private List<String> errors = new ArrayList<>();

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    @Override
    public String toString() {
        return "ErrorResponseObject{" +
                "errors=" + errors +
                '}';
    }
}