package br.ufes.cdsceunes.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/app")
public class AppHomeController {

	@RequestMapping("/")
	@Secured("admin")
	public String index() {
		return "app/index";
	}
}
