package br.ufes.cdsceunes.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.ufes.cdsceunes.model.Surrogate;
import br.ufes.cdsceunes.repository.SurrogateRepository;

@RequestMapping("/api/v1/surrogates")
@RestController
public class SurrogateController extends AbstractController<Surrogate, SurrogateRepository> {

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Surrogate> updateSurrogate(@PathVariable Long id, @RequestBody Surrogate surrogate) {
		Surrogate s = repository.findOne(id);
		if (s == null || s.getId() != surrogate.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(surrogate);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Surrogate> save(@RequestBody Surrogate surrogate) {
		repository.save(surrogate);
		return new ResponseEntity<Surrogate>(surrogate, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Surrogate> delete(@PathVariable("id") Long id) {
		Surrogate surrogate = repository.findOne(id);
		if (surrogate != null) {
			repository.delete(surrogate);
			return new ResponseEntity<Surrogate>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Surrogate>(HttpStatus.BAD_REQUEST);
	}
}
