package com.ksherrell.tradr.exceptions;

import lombok.Data;

public @Data
class UserEmailExceptionResponse {
    private String email;

    public UserEmailExceptionResponse(String email) {
        this.email = email;
    }
}
