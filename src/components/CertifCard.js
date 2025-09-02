 
import "./CertifCardStyles.css"


// import { Link } from "react-scroll";

import React from 'react'

const CertifCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt="img1"/>
      <h2 className='project-title'>{props.title}</h2> 
    </div>
  )
}

export default CertifCard

