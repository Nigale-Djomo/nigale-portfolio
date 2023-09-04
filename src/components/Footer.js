import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Deïdo,</p>
                        <p>Cameroun</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                    +237 699023952
                </div>
            </div>

            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer
