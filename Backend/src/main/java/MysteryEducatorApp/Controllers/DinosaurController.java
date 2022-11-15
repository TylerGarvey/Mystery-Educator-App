package MysteryEducatorApp.Controllers;

import MysteryEducatorApp.Models.Dinosaur;
import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DinosaurController {

    private DinosaurRepository dinoRepo;

    public DinosaurController(DinosaurRepository dinoRepo) {
        this.dinoRepo = dinoRepo;
    }

    @GetMapping("/dinosaurs")
    public Iterable<Dinosaur> getAllDinosaurs() {
        return dinoRepo.findAll();
    }

    @GetMapping("/dinosaurs/{id}")
    public Dinosaur getDinosaurById(@PathVariable long id) {
        return dinoRepo.findById(id).get();
    }


}
