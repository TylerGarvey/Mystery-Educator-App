package MysteryEducatorApp;

import MysteryEducatorApp.Models.Dinosaur;
import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private DinosaurRepository DinoRepo;

    public Populator(DinosaurRepository DinoRepo) {
        this.DinoRepo = DinoRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Dinosaur Dinosaur1 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur1);

        Dinosaur Dinosaur2 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur2);

        Dinosaur Dinosaur3 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur3);

        Dinosaur Dinosaur4 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur4);

        Dinosaur Dinosaur5 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur5);

        Dinosaur Dinosaur6 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur6);

        Dinosaur Dinosaur7 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur7);

        Dinosaur Dinosaur8 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur8);

        Dinosaur Dinosaur9 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur9);

        Dinosaur Dinosaur10 = new Dinosaur("x", "y");
        DinoRepo.save(Dinosaur10);
    }
}
