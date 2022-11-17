package MysteryEducatorApp;

import MysteryEducatorApp.Models.Dinosaur;
import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private DinosaurRepository DinoRepo;


<<<<<<< HEAD
<<<<<<< HEAD
    public Populator(DinosaurRepository DinoRepo,) {
=======
    public Populator(DinosaurRepository DinoRepo) {
>>>>>>> a19982d0d8a597388f0419c1f272e9fb8cf3b5f3
=======
    public Populator(DinosaurRepository DinoRepo) {
>>>>>>> a19982d0d8a597388f0419c1f272e9fb8cf3b5f3
        this.DinoRepo = DinoRepo;


    }

    @Override
    public void run(String... args) throws Exception {

        Dinosaur Dinosaur1 = new Dinosaur("Allosaurus", "Allosaurus was one of many Jurassic dinosaurs discovered in the Morrison Formation (a layer of rocks formed in the Jurassic Period), located in the western United States. It was named by famous fossil collector Othniel Charles Marsh. Most allosaurus specimens have been found in the USA, but allosaurus fossils have also been discovered in Portugal.");
        DinoRepo.save(Dinosaur1);

        Dinosaur Dinosaur2 = new Dinosaur("Camarasaurus", "Camarasaurus is the most commonly-found sauropod of the Late Jurassic in North America. Its name means ‘chambered lizard’, and refers to the hollowed-out bones that it (and other sauropods) possessed. These not only lightened the skeleton, but also contained air sacs that helped the enormous dinosaurs to breathe.");
        DinoRepo.save(Dinosaur2);

        Dinosaur Dinosaur3 = new Dinosaur("Dilophosaurus", "Dilophosaurus was an early Jurassic theropod. This distinctive dinosaur had a pair of thin, bony crests on its head. (The dinosaur’s scientific name means ‘lizard with two crests’.) The crests, which narrow into sharp points at the rear, may have been used as a display by males.");
        DinoRepo.save(Dinosaur3);

        Dinosaur Dinosaur4 = new Dinosaur("Stegosaurus", "Stegosaurus is one of the best known Jurassic dinosaurs. It was a heavily-built plant-eater. Its forelegs were shorter than its hind legs, giving its body a downwards slant.");
        DinoRepo.save(Dinosaur4);

        Dinosaur Dinosaur5 = new Dinosaur("Vulcanodon", "Vulcanodon was an early sauropod that inhabited southern Africa in the Early Jurassic Period. Its name means ‘Vulcan tooth’. This refers to the volcanic rock in which it was found, and the nine sharp teeth that were found with the specimen.");
        DinoRepo.save(Dinosaur5);

        Dinosaur Dinosaur6 = new Dinosaur("Megalosaurus", "Megalosaurus was the first dinosaur to be named. It was one of the three species used by English paleontologist Richard Owen to present a ‘new’ type of animal to the world – the dinosaurs.");
        DinoRepo.save(Dinosaur6);

        Dinosaur Dinosaur7 = new Dinosaur("Lesothosaurus", "Lesothosaurus was a small, slender dinosaur. Its light build and long legs suggest that it was a swift runner. One of the earliest ornithischians, Lesothosaurus would have eaten plants with a chopping motion, rather than with the chewing motion used by later ornithischians (who had developed cheeks that enabled them to do so).");
        DinoRepo.save(Dinosaur7);

        Dinosaur Dinosaur8 = new Dinosaur("Diplodocus ", "Diplodocus was one of the more common large dinosaurs to be found in the Morrison Formation in western USA. The hind legs of Diplodocus were longer than the front legs and its body sloped downwards from the hips to the shoulders.");
        DinoRepo.save(Dinosaur8);

        Dinosaur Dinosaur9 = new Dinosaur("Compsognathus", "Compsognathus was a turkey-sized, meat-eating dinosaur. Remains of this fast-moving predator have been found preserved with their lizard prey still inside their bodies. For many years Compsognathus was the smallest-known dinosaur.");
        DinoRepo.save(Dinosaur9);

        Dinosaur Dinosaur10 = new Dinosaur("Brachiosaurus", "Brachiosaurus is a typical sauropod, with a long neck and tail, and an enormous body supported by four tree-trunk-like legs. The first Brachiosaurus specimen was discovered in 1900 in Colorado, USA, by American paleontologist Elmer S. Riggs.");
        DinoRepo.save(Dinosaur10);
    }
}
