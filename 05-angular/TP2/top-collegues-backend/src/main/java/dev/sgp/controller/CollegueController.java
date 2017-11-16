package dev.sgp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.sgp.entite.Collegue;
import dev.sgp.repository.CollegueRepository;

@RestController
@RequestMapping("/collegues")
@CrossOrigin(origins="http://localhost:4200")
public class CollegueController {
	
	@Autowired
	private CollegueRepository collegues;

	@GetMapping
	public List<Collegue> listerCollegues() {
		return collegues.findAll();	
	}
	
	
	@PostMapping()
	public Collegue ajouterCollegue(@RequestBody Collegue newCollegue) {
		if(collegues.findByNom(newCollegue.getNom()) != null){
			return null;
		}
		collegues.save(newCollegue);
		return newCollegue;
	}
	
	@DeleteMapping()
	public Collegue supprimerCollaborateur(@RequestBody Collegue collegue) {
		
		collegues.delete(collegue);
		return collegue;
	}
	
	@PutMapping(path = "/{pseudo}/score")
	public Collegue modifierScore(@PathVariable String pseudo, @RequestBody Collegue collegue){

		collegues.save(collegue);
		
		return collegue;
		
	}
	
	
}
