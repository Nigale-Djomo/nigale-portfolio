import "./WorkCardStyles.css"
import CertifCard from "./CertifCard"
import CertifCardData from "./CertifCardData"

import React from 'react'


const Certif = () => {
  return (
    <div>
        <h1 className='project-heading'>CERTIFICATIONS</h1>
        <p className='project-heading2'>Mes certifications </p>
        <div className='project-container'>
          {CertifCardData.map((val, ind) =>{
              return(
                  <CertifCard
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                  />
              )
          })}
        </div>
    </div>
  )
}

export default Certif