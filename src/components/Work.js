import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import React from 'react'


const Work = () => {
  return (
    <div>
        <h1 className='project-heading'>PROJECTS</h1>
        <p className='project-heading2'>Découvrez une partie de mon travail ici même</p>
        <div className='project-container'>
          {WorkCardData.map((val, ind) =>{
              return(
                  <WorkCard
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.text}
                      view={val.view}
                      source={val.source}
                  />
              )
          })}
        </div>
    </div>
  )
}

export default Work
