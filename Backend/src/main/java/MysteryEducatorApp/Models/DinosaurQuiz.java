package MysteryEducatorApp.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class DinosaurQuiz {

    @Id
    @GeneratedValue
    private long id;

    private ArrayList<Character> options;

    private ArrayList<Character> answers;

    private ArrayList<String> dinoImgPaths;

    private ArrayList<String> questions;

    public DinosaurQuiz(ArrayList<Character> options, ArrayList<Character> answers, ArrayList<String> dinoImgPaths, ArrayList<String> questions) {
        this.options = options;
        this.answers = answers;
        this.dinoImgPaths = dinoImgPaths;
        this.questions = questions;
    }

    public long getId() {
        return id;
    }

    public ArrayList<Character> getOptions() {
        return options;
    }

    public ArrayList<Character> getAnswers() {
        return answers;
    }

    public ArrayList<String> getDinoImgPaths() {
        return dinoImgPaths;
    }

    public ArrayList<String> getQuestions() {
        return questions;
    }

    public void addOptions(char newOption) {
        options.add(newOption);
    }

    public void addAnswers(char newAnswer) {
        answers.add(newAnswer);
    }

    public void addDinoImgPaths(String newPath) {
        dinoImgPaths.add(newPath);
    }

    public void addQuestions(String newQuestion) {
        questions.add(newQuestion);
    }
}
