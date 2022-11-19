import './homePage.css'
import mouse from '../assets/mouse.mp3'
import React, { useEffect, useState } from "react"
import questions from "./Data.json"

const DinoQuiz = () => {

    const [isStartClicked, setIsStartClicked] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [isResultActive, setIsResultActive] = useState(false)
    const [isResultClicked, setIsResultClicked] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isNextDisabled, setIsNextDisabled] = useState(true)
    const [isNextButtonDisplayed, setisNextButtonDisplayed] = useState(true)
    const [isBonusDisplayed, setIsBonusDisplayed] = useState(true)
    const [isSeeButtonDisabled, setIsSeeButtonDisabled] = useState(true)
    const [dinos, setDinos] = useState([])
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8080/Dinosaurs')
            .then((res) => res.json())
            .then((json) => setDinos(json))
    }, [])


    function playMouse() {
        new Audio(mouse).play();
    }

    const Welcome = () => {
        return (
            <div className='quiz'>
                <h1>Welcome to the Dinosaur Quiz!</h1>
                <h5>All you have to do is pick the name
                    that matches the dinosaur image. Click
                    on start to begin!
                </h5>
                <button onClick={handleStart}>Start!</button>
            </div>
        )
    }

    const Question = () => {
        return (
            <div>
                <h2>Name that Dinosaur!</h2>

                <div>
                    <img src={require(`./images/${questions[index].image}`)}></img>
                    <h3>Score: {score} / 15</h3>
                </div>
                <div>
                    <button className='choice' disabled={isButtonDisabled}
                        onClick={handleCheckAnswer} value={getAnswer(0)}>A. {getAnswer(0)}</button>
                    <button className='choice' disabled={isButtonDisabled}
                        onClick={handleCheckAnswer} value={getAnswer(1)}>B. {getAnswer(1)}</button>
                </div>
                <div>
                    <button className='choice' disabled={isButtonDisabled}
                        onClick={handleCheckAnswer} value={getAnswer(2)}>C. {getAnswer(2)}</button>
                    <button className='choice' disabled={isButtonDisabled}
                        onClick={handleCheckAnswer} value={getAnswer(3)}>D. {getAnswer(3)}</button>
                </div>
                <p style={{ display: isModalActive ? 'flex' : 'none' }}>
                    {dinos[index].description}</p>
                <div>
                    <button onClick={handleNext} disabled={isNextDisabled}
                        style={{ display: isNextButtonDisplayed ? 'flex' : 'none' }}>Next</button>
                    <button disabled={isSeeButtonDisabled}
                        onClick={handleResult} style={{ display: isResultActive ? 'flex' : 'none' }}>
                        See how you did!
                    </button>
                </div>

            </div>
        )
    }

    const Result = () => {
        return (
            <div className='quiz'>
                <h1>Your score is {score}</h1>
                {getMessage()}
                <button style={{ display: isBonusDisplayed ? 'flex' : 'none' }}
                    onClick={handleResult}>Try the bonus round!</button>
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
        if (e.currentTarget.value === dinos[index].name) {
            setScore(score + 1);
        }
        setIsSeeButtonDisabled(true);
        if (index === 9 || index === 14) {
            setIsSeeButtonDisabled(false);
        }
        setIsModalActive(true);
        playMouse();
        setIsButtonDisabled(true);
        setIsNextDisabled(false);
    }

    function handleNext() {
        setIndex(index + 1);
        setIsModalActive(false);
        playMouse()
        if (index === 8 || index === 13) {
            setIsResultActive(true);
            setisNextButtonDisplayed(false);
        }
        setIsNextDisabled(true);
        setIsButtonDisabled(false);
    }

    function handleResult() {
        setIsResultActive(false);
        if (!isResultClicked) {
            setIsResultClicked(true);
        }
        else {
            setIsResultClicked(false);
            setIndex(index + 1);
            setisNextButtonDisplayed(true);
            setIsButtonDisabled(false);
            setIsNextDisabled(true);
            setIsModalActive(false);
        }
        if (index > 10) {
            setIsBonusDisplayed(false);
        }
    }

    function getMessage() {
        if (score == 15) {
            return <h3>You are a dinosaur connoisseur!</h3>
        }
        else if (score > 10) {
            return <h3>You are a dinosaur expert!</h3>
        }
        else if (score > 5) {
            return <h3>You really know your dinosaurs!</h3>
        }
        else {
            return <h3>You are a noobasaurus.</h3>
        }
    }

    return (
        <div>{
            (!isStartClicked ? <Welcome /> :
                !isResultClicked ? <Question /> :
                    <Result />)
        }
        </div>

    )
}
export default DinoQuiz