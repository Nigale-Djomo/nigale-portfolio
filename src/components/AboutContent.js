import "./AboutContentStyles.css"

import photo  from "../images/photo.jpg";

import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <h1 className='about-heading'> A PROPOS </h1>
        <div className="about-container">
          <div className="right">
            <img src={photo} alt="img" className="imgp"/>
          </div>  
          <div className="left">
            <p>
              Passionné par la transformation digitale, je conçois des solutions data & SI qui transforment les process en leviers de performance. Mon expertise couvre la Power Platform — <strong>Power BI</strong> (tableaux de bord décisionnels), <strong>Power Automate</strong> (flux d’automatisation) et <strong>Power Apps</strong> (apps métiers) — ainsi que l’administration et le support d’infrastructures : <strong>WHMCS</strong>, <strong>Virtualizor</strong>, <strong>cPanel</strong>, gestion des <strong>VPS</strong>, <strong>DNS</strong>, noms de domaine, et serveurs web (Apache, Nginx). J’intègre aussi l’IA (<strong>Copilot Agent</strong>, <strong>AI Builder</strong>) pour éliminer les tâches répétitives et accélérer la productivité.
            </p>
            <p>
              Mon approche est orientée résultats : comprendre vos besoins, sécuriser l’existant, automatiser ce qui peut l’être et rendre la donnée <em>actionnable</em>. J’accompagne PME et équipes métiers de bout en bout — du diagnostic à la mise en production — pour livrer des solutions fiables, élégantes et mesurables. Si votre objectif est d’exploiter pleinement vos systèmes et vos données pour gagner en vitesse, clarté et compétitivité, nous sommes déjà alignés.
            </p>
          </div>
        </div>
    </div>
  )
}

export default AboutContent
