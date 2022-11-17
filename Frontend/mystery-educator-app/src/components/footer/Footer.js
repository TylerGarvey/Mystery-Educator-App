import { NavLink } from "react-router-dom";
import React from "react";
import './footer.css'

const Footer = () => (
    <div className='Footer'>
        <h1>Jac Enterprises</h1>
        <h2>Thank you for checking out our website!</h2>
        <ul className="navList">
            <NavLink to= '/HomePage'>Home</NavLink>
            <NavLink to= '/aboutUs'>About Us</NavLink>
            <NavLink to= '/contact'>Contact</NavLink>
            

        </ul>
     </div>
)

export default Footer