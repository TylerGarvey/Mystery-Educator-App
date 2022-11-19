import mouse from '../../assets/mouse.mp3'
import { NavLink } from "react-router-dom";
import React from "react";
import './header.css'

let playMouse = () => {
    new Audio (mouse).play();
}

const Header = () => (
    <div className='header'>
        <h1>Jac Enterprises</h1>
        <ul className="navList">
            <NavLink to= '/' onClick={playMouse}>Home</NavLink>
            <NavLink to= '/aboutUs' onClick={playMouse}>About Us</NavLink>
            <NavLink to= '/contact' onClick={playMouse}>Contact</NavLink>
        </ul>
     </div>
)

export default Header