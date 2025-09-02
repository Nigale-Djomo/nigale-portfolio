import "./SkillStyles.css"

import React from 'react'

const Skill = (props) => {
  return (
    <div>
        <div className='skill-box'>
            <div className='skill-title'>
                <div className='img'>
                    <img src={props.img} alt="PowerPlatform" className="skill-icon"/>
                </div>
                <p className="skill-center-justify skill-down-text">{props.titre}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
