package com.example.demo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {
	@RequestMapping("/api/test/{id}")
	public String getTest(@PathVariable String id) {
		long result = 0;
		long num = Long.parseLong(id);
		for (long i=0; i<num; i++) {
			result = result + 1;
		}
		
		String message = Long.toString(result);
		
		return message;
	}
}
