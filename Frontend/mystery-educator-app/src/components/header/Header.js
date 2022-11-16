import { NavLink } from "react-router-dom";
import React from "react";
import './header.css'

const Header = () => (
    <div className='header'>
        <h1>Jac Enterprises</h1>
        <ul className="navList">
            <NavLink to= '/'>Home</NavLink>
            <NavLink to= '/aboutUs'>About Us</NavLink>
            <NavLink to= '/contact'>Contact</NavLink>


        </ul>
     </div>
)

export default Header