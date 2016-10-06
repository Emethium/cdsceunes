package br.ufes.cdsceunes.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.ufes.cdsceunes.model.OfferedClass;
import br.ufes.cdsceunes.model.Semester;
import br.ufes.cdsceunes.repository.OfferedClassRepository;

@RequestMapping("/api/v1/classes")
@RestController
public class OfferedClassController extends AbstractController<OfferedClass, OfferedClassRepository> {

	@RequestMapping(method = RequestMethod.GET, path = "/{year}/{semester}")
	public ResponseEntity<List<OfferedClass>> listBySemester(@PathVariable String year, @PathVariable String semester) {
		semester = Integer.valueOf(semester).toString();
		List<OfferedClass> found = repository.findBySemester(new Semester(year, semester));
		if (!found.isEmpty()) {
			return new ResponseEntity<List<OfferedClass>>(found, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<OfferedClass>>(found, HttpStatus.NO_CONTENT);
		}

	}
}
