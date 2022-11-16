import React from "react";
import './homePage.css';
import dino from '../assets/dino1.jpg';
import rocket from '../assets/rocket1.jpg';
import TSNT from '../assets/TSNT.jpg'
import { NavLink } from "react-router-dom";


const HomePage = () => (
    <div className="homePage">
        <h2>Let's learn something new today!</h2>
        <div className="images">
            <img src= {dino} id="dino1" alt="Dinosaur"/>
            <img src= {rocket} id="rocket1" alt="Rocketship"/>
            <img src= {TSNT} id="TSNT" alt= "try something new today"/>

        </div>

        <ul className="apiBtn">
            <div className="dinoApi">
            
             <NavLink to= '/dinoQuiz'> DinoQuiz </NavLink>
            </div>
            
            <div className="NASAApi">
                 <NavLink to= '/spaceApi'> NASA API </NavLink>
            </div>   

            <div className="boredApi">
                 <NavLink to= '/boredApi'> Boredom API </NavLink>
            </div>
        </ul>
       
       
    </div>
)
    
    
 
export default HomePage