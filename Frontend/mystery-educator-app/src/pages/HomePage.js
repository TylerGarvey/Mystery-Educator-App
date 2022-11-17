import React from "react";
import './homePage.css';
import audio from '../assets/dinosaur.mp3' 
import roar from '../assets/elephant.mp3'
import fart from '../assets/fartSound.mp3'
import dino from '../assets/dino1.jpg';
import animal from '../assets/animal.jpg';
import TSNT from '../assets/TSNT.jpg'
import { NavLink } from "react-router-dom";

let playAudio = () => {
    new Audio(audio).play();
    }

let playRoar = () => {
    new Audio(roar).play();
    }

let playFart = () => {
     new Audio(fart).play();
    }

const HomePage = () => (
    <div className="homePage">
        <h2>Let's learn something new today!</h2>
        <div className="images">
            <img src= {dino} id="dino1" alt="Dinosaur"/>
            <img src= {animal} id="animal" alt="animal"/>
            <img src= {TSNT} id="TSNT" alt= "try something new today"/>

        </div>

        

        <ul className="apiBtn">
            <div className="dinoApi">
            
             <NavLink to= '/dinoQuiz' onClick={playAudio}> DinoQuiz </NavLink>
            </div>
            
            <div className="animalAPI">
                 <NavLink to= '/animalApi' onClick={playRoar}>  Animal API </NavLink>
            </div>   

            <div className="boredApi">
                 <NavLink to= '/boredApi' onClick={playFart}> Boredom API </NavLink>
            </div>
        </ul>
       
       
    </div>

    
)



    
    
 
export default HomePage