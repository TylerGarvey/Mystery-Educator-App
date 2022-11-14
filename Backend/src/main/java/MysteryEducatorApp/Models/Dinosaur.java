package MysteryEducatorApp.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Dinosaur {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String description;

    public Dinosaur(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
    public Dinosaur() {

    }
}

