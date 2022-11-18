package MysteryEducatorApp;

import MysteryEducatorApp.Models.Dinosaur;
import MysteryEducatorApp.Repo.DinosaurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private DinosaurRepository DinoRepo;

<<<<<<< HEAD

=======
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
    public Populator(DinosaurRepository DinoRepo) {
        this.DinoRepo = DinoRepo;
    }

    @Override
    public void run(String... args) throws Exception {


        String brachioD = "Brachiosaurus is a typical sauropod, with a long neck and tail, " +
                "and an enormous body supported by four tree-trunk-like legs. The first " +
                "Brachiosaurus specimen was discovered in 1900 in Colorado, USA, by " +
                "American paleontologist Elmer S. Riggs. At the time of its discovery it " +
                "was believed to be one of the largest dinosaurs ever to have lived. " +
                "Although larger dinosaurs have since been discovered, Brachiosaurus " +
                "was still a true giant, reaching estimated lengths of 21m (69 ft.)";
        Dinosaur Dinosaur1 = new Dinosaur("Brachiosaurus", brachioD);
        DinoRepo.save(Dinosaur1);

        String stegocerusD = "Stegoceras was a member of the family Pachycephalosauridae, a group " +
                "also known as the ‘bone-headed’ dinosaurs on account of their reinforced skulls. " +
                "The top of Stegoceras’ skull was thick and domed, and its neck and back were " +
                "well-developed; the Stegoceras was built like a mini battering ram. The species " +
                "may have established dominance in its group using head butting " +
                "rituals – similar to those used by modern goats.";
        Dinosaur Dinosaur2 = new Dinosaur("Stegoceras", stegocerusD);
        DinoRepo.save(Dinosaur2);

        String stegoD = "Stegosaurus is one of the best known Jurassic dinosaurs. It was a " +
                "heavily-built plant-eater. Its forelegs were shorter than its hind legs, " +
                "giving its body a downwards slant. The most distinctive feature of the  " +
                "Stegosaurus is the two rows of large plates that run along its back. " +
                "These may have used as a defense against predators, or as a " +
                "means of controlling the animal’s body heat.";
        Dinosaur Dinosaur3 = new Dinosaur("Stegosaurus", stegoD);
        DinoRepo.save(Dinosaur3);

        String spinoD = "Spinosaurus was a similar size to, if not slightly larger than, " +
                "Tyrannosaurus, making it one of the largest predatory land animals that " +
                "has ever lived. Spinosaurus was adapted to a semi-aquatic lifestyle, and had " +
                "a long, crocodile-like snout for catching fish. It also took land-based prey. " +
                "The distinctive sail-like fin of Spinosaurus was supported by rows of bony " +
                "spines. It may have been used to control the " +
                "dinosaur’s body temperature, or as a means of display.";
        Dinosaur Dinosaur4 = new Dinosaur("Spinosaurus", spinoD);
        DinoRepo.save(Dinosaur4);

        String triD = "Triceratops was a distinctive dinosaur, having two large horns on top of its " +
                "head and a third horn above its snout (its scientific name means ‘three-horned face’). " +
                "Covering triceratops’ neck was a large bony shield, or ‘frill’. Theories as to what " +
                "the horns and frill were used for include: providing protection against predators; " +
                "a means of signaling the animal’s health and condition to potential mates; fighting " +
                "other Triceratops to establish dominance; or perhaps a mixture of all three. Many " +
                "Triceratops specimens have been discovered, suggesting that it was one of the dominant " +
                "plant-eaters of the time. 40% of all fossils found in western USA’s Hell Creek Formation " +
                "are Triceratops, making it the most abundant dinosaur in the area.";
        Dinosaur Dinosaur5 = new Dinosaur("Triceratops", triD);
        DinoRepo.save(Dinosaur5);

        String velocD = "Fans of the Jurassic Park films may be surprised to learn that " +
                "Velociraptor, rather than being taller than a man, was actually turkey-sized. " +
                "(The velociraptors in Jurassic Park were in fact based on Deinonychus; they were named " +
                "‘velociraptors’ because the writers thought that it sounded better.) The real " +
                "velociraptor was around 0.5 m (1.6 ft.) tall. It walked on its hind legs, and had feathers. " +
                "Like other Dromaeosaurids, it possessed a large sickle-shaped " +
                "claw on each of its feet with which it dispatched its prey.";
        Dinosaur Dinosaur6 = new Dinosaur("Velociraptor", velocD);
        DinoRepo.save(Dinosaur6);

        String carnoD = "Carnotaurus was a bipedal meat-eater. The structure of this Cretaceous Period " +
                "dinosaur’s skeleton suggests that is was a fast runner. Its forelimbs were even " +
                "shorter than those of Tyrannosaurus; scientists believe that they may have been " +
                "vestigial (i.e. that they had no function, and were ‘left over’ from the animal’s ancestors). " +
                "Carnotaurus is the only known carnivorous dinosaur with horns. These weapons may have " +
                "been used to fight rival males for territory or dominance.";
        Dinosaur Dinosaur7 = new Dinosaur("Carnotaurus", carnoD);
        DinoRepo.save(Dinosaur7);

        String deinonD = "The “Velociraptors” in the film Jurassic Park were actually based on Deinonychus " +
                "rather than the real-life Velociraptor. The name was changed because it was thought that " +
                "the name “velociraptor” sounded more dramatic. Like the “Velociraptors” in the film, " +
                "Deinonychus was a mid-sized predatory dinosaur. Fossil remains suggest that Deinonychus " +
                "was a pack hunter; their skeletons have been found together, and larger animals " +
                "(too large for a single Deinonychus to bring down) " +
                "have been found with possible Deinonychus teeth marks.";
        Dinosaur Dinosaur8 = new Dinosaur("Deinonychus", deinonD);
        DinoRepo.save(Dinosaur8);

        String paraD = "Parasaurolophus was a hadrosaurid in the family Hadrosauridae. This group of " +
                "Cretaceous dinosaurs is otherwise known as the ‘duck-billed dinosaurs’ on behalf " +
                "of their flat, bill like snouts. Parasaurolophus’ most distinctive feature was a " +
                "long, curved crest projecting from the back of its head. Tubes inside the crest " +
                "ran from the nostrils to the tip of the crest, then back towards the head. It is " +
                "thought that Parasaurolophus may have used the crest to produce or amplify its calls. " +
                "Alternatively, the crest may have played a part in controlling the animal’s body temperature.";
        Dinosaur Dinosaur9 = new Dinosaur("Parasaurolophus", paraD);
        DinoRepo.save(Dinosaur9);

        String tyranD = "Tyrannosaurus is one of the best-known of all dinosaurs. Tyrannosaurus Rex is " +
                "one of the few dinosaur species that most people can name (most dinosaurs are known by " +
                "genus (e.g. Tyrannosaurus), rather than by species (e.g. Tyrannosaurus Rex)). " +
                "Tyrannosaurus was a large bipedal predator with a huge head and powerful jaws. " +
                "It had what is estimated to be the greatest bite force of all land animals. With " +
                "teeth up to 30.5 cm (12 in) in length (including root), it would have been a " +
                "formidable predator, capable of taking down large, well-armored prey.";
        Dinosaur Dinosaur10 = new Dinosaur("Tyrannosaurus", tyranD);
        DinoRepo.save(Dinosaur10);

        String baryD = "Baryonyx was discovered in a clay pit in England by William Walker in 1983. It " +
                "is the most complete spinosaurid specimen yet found. Contained within its stomach were " +
                "fish scales and the remains of an Iguanodon. Baryonyx had the typical long, " +
                "crocodile-like jaws and straight, pointed teeth of a spinosaurid. " +
                "It probably had a semi-aquatic lifestyle, feeding predominantly on fish.";
        Dinosaur Dinosaur11 = new Dinosaur("Baryonyx", baryD);
        DinoRepo.save(Dinosaur11);

        String ankyloD = "The first Ankylosaurus specimen was found in 1906 at the well-known " +
                "Hell Creek Formation in Montana. The rocks at this location were formed during " +
                "the Late Cretaceous. The expedition was led by US paleontologist " +
                "Barnum Brown, who named the Ankylosaurus in 1908. Ankylosaurus is the biggest-known " +
                "Ankylosaurid. It lived right up to the extinction event that killed off the non-avian dinosaurs. " +
                "The plant-eating Ankylosaurus was built like a tank, with rows of armored plates " +
                "running along its body and horns on its head. Its estimated weight was between 5 and 8 tonnes. " +
                "The dinosaurs was armed with a heavy club at the end of its powerful tail.Any predator " +
                "thinking about taking on an Ankylosaurus would soon learn that it wouldn’t be an easy meal!";
        Dinosaur Dinosaur12 = new Dinosaur("Ankylosaurus", ankyloD);
        DinoRepo.save(Dinosaur12);

        String megaloD = "Megalosaurus was the first dinosaur to be named. It was one " +
                "of the three species used by English paleontologist Richard Owen to present " +
                "a ‘new’ type of animal to the world – the dinosaurs. " +
                "Megalosaurus walked on its hind legs, using its tail as a counterbalance. " +
                "It was a predator, and its likely prey would have included sauropods and stegosaurians.";
        Dinosaur Dinosaur13 = new Dinosaur("Megalosaurus", megaloD);
        DinoRepo.save(Dinosaur13);

        String amargoD = "Although Amargosaurus had the typical build of a sauropod (i.e. large " +
                "body, long tail and four pillar-like legs) it had a number of features that " +
                "differentiated it from other dinosaurs of this type. Its neck was relatively " +
                "short, and projecting upwards from the neck and back were two rows of tall spines. " +
                "Along the back of the neck – where the spines were at their tallest – they were up " +
                "to 60 cm (24in.) in length. They may have been used as defense against predators, " +
                "as a weapon, or to support a crest, which itself may have been used " +
                "either for display or heat regulation.";
        Dinosaur Dinosaur14 = new Dinosaur("Amargosaurus", amargoD);
        DinoRepo.save(Dinosaur14);

        String giganD = "Giganotosaurus vies with Spinosaurus for the title ‘biggest ever land predator’. " +
                "It was a huge, fast-moving meat-eater with a skull even larger than that of " +
                "Tyrannosaurus. Its bite force, however, is estimated not to have been as powerful " +
                "as that of its North American cousin. Giganotosaurus roamed the South American " +
                "landscape, preying on titanosaurs and other sauropods that were alive at the time.";
        Dinosaur Dinosaur15 = new Dinosaur("Giganotosaurus", giganD);
        DinoRepo.save(Dinosaur15);
    }
}
