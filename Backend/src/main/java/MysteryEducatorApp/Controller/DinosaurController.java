package MysteryEducatorApp.Controller;

import MysteryEducatorApp.Models.Dinosaur;
import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class DinosaurController {
    private DinosaurRepository DinoRepo;

    public DinosaurController(DinosaurRepository dinoRepo) {

        DinoRepo = dinoRepo;
    }
    @GetMapping("/Dinosaurs")
    public Iterable<Dinosaur> getDinosaurs(){

        return DinoRepo.findAll();
    }
    @GetMapping("/Dinosaurs/{id}")
    public Dinosaur getSingleDinosaur(@PathVariable long id){

        return DinoRepo.findById(id).get();
    }
    @PostMapping("/Dinosaurs")
    public Iterable<Dinosaur> addDinosaur(@RequestBody Dinosaur newDinosaur) {
        DinoRepo.save(newDinosaur);
        return DinoRepo.findAll();
    }


}
