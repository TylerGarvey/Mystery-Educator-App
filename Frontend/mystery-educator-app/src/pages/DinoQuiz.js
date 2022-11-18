import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import questions from "./Data.json"

const DinoQuiz = () => {

    const [isStartClicked, setIsStartClicked] = useState(false)
    const [dino, setDino] = useState(null);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/dinosaurs}')
            .then((res) => res.json())
            .then((json) => setDino(json))
    }, [])

    const Welcome = () => {
        return (
            <div>
                <h1>Welcome to the Dinosaur Quiz!</h1>
                <h5>All you have to do is pick the name
                    that matches the dinosaur image. Click
                    on start to begin!
                </h5>
                <button onClick={handleStart}>Start!</button>
            </div>
        )
    }

    function handleStart() {
        setIsStartClicked(true);
    }

    function getAnswer(ansIndex) {
        return questions[index].answers[ansIndex];
    }

    function handleCheckAnswer(e) {
        if (e.currentTarget.value === questions[index].correctAnswer) {
            setScore(score + 1);       
        }
        
    }

    function handleNext() {
        setIndex(index + 1);

    }

    const Question = () => {
        return (
            <div>
                <h2>Name that Dinosaur!</h2>
                <img src={require(`./images/${questions[index].image}`)}></img>
                <div>
                    <h3>Score: {score} / 15</h3>
                </div>
                <div>
                    <button onClick={handleCheckAnswer} value={getAnswer(0)}>A. {getAnswer(0)}</button>
                    <button onClick={handleCheckAnswer} value={getAnswer(1)}>B. {getAnswer(1)}</button>
                </div>
                <div>
                    <button onClick={handleCheckAnswer} value={getAnswer(2)}>C. {getAnswer(2)}</button>
                    <button onClick={handleCheckAnswer} value={getAnswer(3)}>D. {getAnswer(3)}</button>
                </div>
                <div>
                    <button onClick={handleNext}>Next</button>
                </div>
                
            </div>
        )
    }

    return (
        <div>{
            (!isStartClicked ? <Welcome /> :
                <Question />)
        }
        </div>

    )
}
export default DinoQuiz