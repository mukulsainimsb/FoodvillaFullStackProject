package com.springboot.foodyzone.project_foodyzone.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class AccountNotFoundException extends RuntimeException {
	
	public AccountNotFoundException(String msg) {
		super(msg);
		
	}
}
