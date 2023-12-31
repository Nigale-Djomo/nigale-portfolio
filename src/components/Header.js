import React from 'react'
import { motion } from "framer-motion";
import profile from "../images/profile.jpg"

import './Header.css'

const scaleVariants={
    whileInView:{
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
  return (
    <div id='home' className="app__header app_flex">
        <motion.div 
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app_header-info"
        >
        <div className='app_header-badge'>
            <div className='badge-cmp app_flex'>
                <span>👋</span>
                <div style= {{ marginLeft: 20 }}>
                    <p className='p-text'>Hello, I am</p>
                    <h1 className='head-text'>Nigale</h1>
                </div>
            </div>
            <div className='tag-cmp app_flex'>
                <p className='p-text'>Data Analyst</p>
                <p className='p-text'>Freelancer</p>
            </div>
        </div>
        </motion.div>

        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app_header-img"
        >
            <img src={profile} alt="profile_bg"/>
                <motion.img
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    // src={circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
        </motion.div>

        <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='app_header.circle'
        >
        
        </motion.div>


        
    </div>
  )
}

export default Header
