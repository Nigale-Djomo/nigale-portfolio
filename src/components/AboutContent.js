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
              <p>Je suis une Analyste de données avec une passion pour les bonnes pratiques de développement. Mon expertise technique s'étend sur power BI,  je possède une certification <strong>Microsoft Power BI Data Analyst</strong> ce qui m'a permis de contribuer à la réalisation de plusieurs projets. Je suis passionné par l'exploitation des données pour en extraire des informations et des insights précieux. En tant qu'analyste de données, j'ai acquis une expertise dans la collecte, la transformation et l'analyse de données pour aider les entreprises à prendre des décisions stratégiques éclairées.</p>
              <p className="p2"> J'ai un fort intérêt pour la résolution de problèmes, les défis analytiques et l'exploration de nouvelles technologies. J'aime également partager mes connaissances en organisant des ateliers et en contribuant à des communautés en ligne axées sur les données. Travailler en équipe est essentiel pour moi, car je crois en la valeur de la collaboration et du partage de connaissances pour atteindre des résultats exceptionnels.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutContent
