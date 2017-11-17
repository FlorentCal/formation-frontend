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
import dev.sgp.exception.CollegueException;
import dev.sgp.repository.CollegueRepository;

@RestController
@RequestMapping("/collegues")
@CrossOrigin(origins="*")
public class CollegueController {

	@Autowired
	private CollegueRepository collegues;

	@GetMapping
	public List<Collegue> listerCollegues() {
		return collegues.findAll();	
	}

	@GetMapping(path="/detail/{nom}")
	public Collegue trouverCollegue(@PathVariable String nom) {
		return collegues.findByNom(nom);
	}

	@PostMapping()
	public Collegue ajouterCollegue(@RequestBody Collegue newCollegue) throws CollegueException {
		if(collegues.findByNom(newCollegue.getNom()) != null){
			throw new CollegueException("Le collègue " + newCollegue.getNom() + " existe déjà" );
		} else if(newCollegue.getNom().trim().equals("")){
			throw new CollegueException("Entrez un nom pour le collègue");
		} else if(newCollegue.getUrl().trim().equals("")){
			throw new CollegueException("Entrez un url pour le collègue");
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
	public Collegue modifierScore(@PathVariable String pseudo, @RequestBody Integer action){

		Collegue collegue = collegues.findByNom(pseudo);
		
		collegue.setScore(collegue.getScore() + action);
		
		collegues.save(collegue);

		return collegue;

	}


}
