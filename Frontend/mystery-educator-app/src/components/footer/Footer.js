import mouse from '../../assets/mouse.mp3'
import React from "react";
import './footer.css'

let playMouse = () => {
    new Audio (mouse).play();
}

const Footer = () => (
    <div className='Footer'>
        <h3>Thank you for checking out our website!</h3> 
        <div className='wcci'>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiFlYT8zLb7AhUwyZQJHT1WBfkYABAAGgJ5bQ&ohost=www.google.com&cid=CAESa-D2iBFyxEgctHbzYPsaBEO96iIVHMUJp3M0QJNlj56XZkq3wULj5JJKmEDIF7ca0pZw5hE5VVE3uBoGNmt8ur1GHwusjydZyt44Ryl-_DNFFmGTFEXv3FWdccJJIKmyNGl2Fxuh9w4WsLHO&sig=AOD64_0TU9x5l_bMwZx5UobIeJN_YoMNpw&q&adurl&ved=2ahUKEwisp_r7zLb7AhWTlIkEHbybDiUQ0Qx6BAgHEAE" onClick={playMouse} target="blank"><small>&copy; WCCI 2022</small>
        </a> 
        </div>
    </div>
    
)

export default Footer