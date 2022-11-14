package MysteryEducatorApp;
import javax.persistence.Component;
@Component
public class Populator implements CommandLineRunner{

    private DinosaurRepository DinoRepo;

    public Populator(DinosaurRepository DinoRepo) {
        this.DinoRepo = DinoRepo;
    }

    @Override
    public void run(string... args) throws Exception {

        Dinosaur Dinosaur1 = new Dinosaur();
        DinoRepo.save(Dinosaur1)


        Dinosaur Dinosaur2 = new Dinosaur();
        dinoRepo.save(Dinosaur2)

        Dinosaur Dinosaur3 = new Dinosaur();
        dinoRepo.save(Dinosaur3)

        Dinosaur Dinosaur4 = new Dinosaur();
        dinoRepo.save

        Dinosaur Dinosaur5 = new Dinosaur();
        dinoRepo.save

        Dinosaur Dinosaur6= new Dinosaur();
        dinoRepo.save

        Dinosaur Dinosaur7 = new Dinosaur();
        dinoRepo.save


        Dinosaur Dinosaur8 = new Dinosaur();
        dinoRepo.save

        Dinosaur Dinosaur9 = new Dinosaur();
        dinoRepo.save

        Dinosaur Dinosaur10 = new Dinosaur();
        dinoRepo.save



}
