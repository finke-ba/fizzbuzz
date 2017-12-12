package com.codechallange.fizzbuzz.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseObject {
    @JsonProperty
    private String response;

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
