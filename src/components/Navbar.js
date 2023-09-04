 import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
       if(window.scrollY >=100) {
        setColor(true);
       }else{
        setColor(false);
       }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
            <h1>Rivelle Djomo</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="about"  spy={true} smooth={true} offset={-100} duration={500}>A Propos</Link>
            </li>
            <li className="nav-item">
                <Link to="project"  spy={true} smooth={true} offset={-100} duration={500}>Projets</Link>
            </li>
            <li className="nav-item">
                <Link to="skills"  spy={true} smooth={true} offset={-100} duration={500}>Competences</Link>
            </li>
            <li className="nav-item">
                <Link to="contact"  spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}} />
            ) : (
                <FaBars size={20} style={{color: "#fff"}} />
            )}
            
            
        </div>
    </div>
  )
}

export default Navbar
