import "./SkillStyles.css"

import React from 'react'

const Skill = (props) => {
  return (
    <div>
        <div className='skill-box'>
            <div className='skill-title'>
                <div className='img'>
                    <img src={props.img} alt="powerbi" className="skill-icon"/>
                </div>
                <p>{props.titre}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
