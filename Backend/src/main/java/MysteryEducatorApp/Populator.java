package MysteryEducatorApp;

@Component
public class Populator implements CommandLineRunner{

    private DinosaurRepo DinoRepo;

    public Populator(DinosaurRepo DinoRepo) {
        this.DinoRepo = DinoRepo;
    }

    @Override
    public void run(string... args) throws Exception {

        Dinosaur Dinosaur1 = new Dinosaur();
        DinoRepo.save(Dinosaur)


        Dinosaur Dinosaur2 = new Dinosaur();
        dinoRepo.save


        Dinosaur Dinosaur3 = new Dinosaur();
        dinoRepo.save

}
