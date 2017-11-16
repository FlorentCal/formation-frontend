package dev.sgp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.sgp.entite.Collegue;

public interface CollegueRepository extends JpaRepository<Collegue, Integer>{

	Collegue findByNom(String nom);
}

