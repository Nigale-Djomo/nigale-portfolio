import "./SkillStyles.css"
import Skill from "./Skill"
import SkillsData from "./SkillsData"

import React from 'react'

const SkillMap = () => {
  return (
    <div>
        <h1 className='skill-heading'>COMPETENCES</h1>
        <p className='skill-heading2'>Passionné par l’innovation digitale, j’ai eu l’opportunité de travailler avec des solutions variées qui m’ont permis de développer une vision à la fois technique et stratégique.</p>
        <div className='skill-container'>
        {SkillsData.map((val, ind) =>{
            return(
                <Skill
                    key={ind}
                    img={val.img}
                    titre={val.titre}
                />
            )
        })}
        </div>
    </div>
  )
}

export default SkillMap
