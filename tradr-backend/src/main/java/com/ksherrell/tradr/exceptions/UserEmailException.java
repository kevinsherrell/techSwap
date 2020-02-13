package com.ksherrell.tradr.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserEmailException extends RuntimeException{
    public UserEmailException(String message) {
        super(message);
    }
}
