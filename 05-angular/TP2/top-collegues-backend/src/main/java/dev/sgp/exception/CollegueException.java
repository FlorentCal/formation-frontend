package dev.sgp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST) //400
public class CollegueException extends Exception {

	/** serialVersionUID : long */
	private static final long serialVersionUID = 8572602492922226304L;

	public CollegueException(String exception){

		super(exception);

	}
}
