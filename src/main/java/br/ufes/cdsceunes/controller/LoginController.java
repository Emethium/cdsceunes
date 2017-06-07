package br.ufes.cdsceunes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

	@RequestMapping("/")
	public String index() {
		return "login/login";
	}

	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login() {
		return "login/login";
	}
	
}
