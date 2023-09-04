 
import "./WorkCardStyles.css"


import { Link } from "react-scroll";

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt="img1"/>
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <Link to={props.view} className="btn">Demo</Link>
          <Link to={props.source} className="btn">Code</Link>
        </div>
      </div>
    </div>
  )
}

export default WorkCard

