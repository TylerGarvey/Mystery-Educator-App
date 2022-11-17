package MysteryEducatorApp.Repo;

import MysteryEducatorApp.Models.Dinosaur;
import org.springframework.data.repository.CrudRepository;

public interface DinosaurRepository extends CrudRepository<Dinosaur, Long> {
}
