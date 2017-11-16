package dev.sgp.entite;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Collegue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nom;
	
	private String url;
	
	private Integer score;

	public Collegue() {
		super();
	}

	public Collegue(String nom, String url, int score) {
		super();
		this.nom = nom;
		this.url= url;
		this.score = score;
	}

	/** Getter for id
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/** Setter for id
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	
	/** Getter for nom
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}
	/** Setter for nom
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}
	
	/** Getter for urlImage
	 * @return the urlImage
	 */
	public String getUrl() {
		return url;
	}
	/** Setter for urlImage
	 * @param urlImage the urlImage to set
	 */
	public void setUrl(String urlImage) {
		this.url= urlImage;
	}

	/** Getter for score
	 * @return the score
	 */
	public Integer getScore() {
		return score;
	}
	/** Setter for score
	 * @param score the score to set
	 */
	public void setScore(Integer score) {
		this.score = score;
	}
	

		
	
}
