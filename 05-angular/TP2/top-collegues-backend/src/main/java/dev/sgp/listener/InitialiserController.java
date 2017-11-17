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
					      "http://s1.r29static.com//bin/entry/382/0,0,2000,2000/x/1761182/image.png",
					      15000),
					    new Collegue("Olivier",
					      "http://winneris.biz/wp-content/uploads/2017/03/ABIGAIL-SPENCER-2-1.jpg",
					      200000000),
					    new Collegue("Nicolas",
					      "http://s3.r29static.com//bin/entry/607/0,200,2000,2000/x,80/1551091/image.jpg",
					      9999),
					    new Collegue("Ange",
					      "https://68.media.tumblr.com/d1264e97a7b67038ba99e4bb41527185/tumblr_npfbm1QEoU1uotx9to1_1280.jpg",
					      152015),
					    new Collegue("Benjamin",
					      "http://img.rtl.it/RTLFM/News/Article/1000x1000/rocco-siffredi-ricordo-il-giorno-della-morte-di-mio-fratello-hhy3n.jpg",
					      32)
				).forEach(collegues::save);
		
	}

}
