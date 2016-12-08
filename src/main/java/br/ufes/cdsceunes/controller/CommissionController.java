package br.ufes.cdsceunes.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.ufes.cdsceunes.model.Commission;
import br.ufes.cdsceunes.model.Department;
import br.ufes.cdsceunes.repository.CommissionRepository;

@RequestMapping("/api/v1/commissions")
@RestController
public class CommissionController extends AbstractController<Commission, CommissionRepository> {

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Commission> updateCommission(@PathVariable Long id, @RequestBody Commission commission) {
		Commission c = repository.findOne(id);
		if (c == null || c.getId() != commission.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(commission);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Commission> save(@RequestBody Commission commission) {
		repository.save(commission);
		return new ResponseEntity<Commission>(commission, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Commission> delete(@PathVariable("id") Long id) {
		Commission commission = repository.findOne(id);
		if (commission != null) {
			repository.delete(commission);
			return new ResponseEntity<Commission>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Commission>(HttpStatus.BAD_REQUEST);
	}
}
