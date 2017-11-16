package dev.sgp.listener;


import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.sgp.entite.Collegue;
import dev.sgp.repository.CollegueRepository;


@RestController
@RequestMapping("/*")
public class InitialiserController {
	
	@Autowired
	private CollegueRepository collegues;
	
	@PostConstruct
	public void initialiserCollaborateurs(){
		
		Stream.of(
				new Collegue("Florent",
					      "https://avatars2.githubusercontent.com/u/32134408?s=400&u=0d4df0a68c62d8d448de2f801bb23dbdf86dba7c&v=4",
					      15000),
					    new Collegue("Olivier",
					      "https://pbs.twimg.com/profile_images/570625160508485632/B1cGbyTD.png",
					      200),
					    new Collegue("Nicolas",
					      "https://d1zfszn0v5ya99.cloudfront.net/user/549521/profile_picture/5584eb547af16_square.png",
					      170),
					    new Collegue("Ange",
					      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAm9AAAAJGFlNjI3NmZmLTc5ZDMtNDA1Zi05MjBiLWM1OTNmZmY2MjM2ZA.jpg",
					      15),
					    new Collegue("Benjamin",
					      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAy2AAAAJGQ4ZjNkNDRhLTg5MGQtNGY3MC1hODA1LTcyODk1Y2ViYzg4Yg.jpg",
					      32)
				).forEach(collegues::save);
		
	}

}
