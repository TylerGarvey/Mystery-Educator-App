package MysteryEducatorApp.Controller;

import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DinosaurController {
    private DinosaurRepository DinoRepo;

    public DinosaurController(DinosaurRepository dinoRepo) {
        DinoRepo = dinoRepo;
    }

    
}
