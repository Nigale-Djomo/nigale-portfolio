import "./HeroImgStyles.css"

import React from 'react'

import { Link } from "react-scroll";

import { ImLinkedin, ImGithub } from "react-icons/im"

import profil from "../images/profil.jpg"

const HeroImg = () => {
  return (
    <div className="hero" id='home'>
        <div className="mask">
          <img className="into-img" src={profil} alt="profile"/>
        </div>
        <div 
          className="content">
            <div className="her">
                <h2>👋</h2>
                <h2>HI, I'M Nigale</h2>
            </div>
                <h1>Data Analyst.</h1>
            <div className="bt">
              <a href="/cv Nini.pdf" className="btn"> télécharger CV</a>
              <Link to="contact" className="btn btn-light"> Contact Info</Link>
            </div>
            <div className="Im">
              <a href="https://www.linkedin.com/in/rivelle-djomo-21a622219/">
                <ImLinkedin size={45} style={{ color: "rgb(36, 166, 252)", padding: "3px", backgroundColor: "#fff", borderRadius: "9999px", cursor: "pointer"}}/>
              </a>
              <a href="https://github.com/">
                <ImGithub size={50} style={{ color: "#fff", padding: "3px", backgroundColor: "black", marginLeft: "1rem", cursor: "pointer"}}/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
