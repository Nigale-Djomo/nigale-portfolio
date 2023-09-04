import "./FormStyles.css"

import React from 'react'
import { Link } from "react-scroll"

import { FaPhone } from "react-icons/fa";
import { ImMail } from "react-icons/im";

// import RedirectToEmail from './RedirectToEmail';

const Form = () => {


  return (
    <div className="contact-container">
        <h1 className='contact-heading'> CONTACT </h1>
        <p className='contact-heading2'>Soumettez le formulaire ci-dessous pour entrer en contact avec moi</p>
        <div className="contact">
          <a href="mailto: siewenigale@gmail.com" className="contact1">\p
            <ImMail size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
            <p>siewenigale@gmail.com</p>
          </a>
          <Link className="contact1 contact2">
          <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
          <p>+237699023952</p>
          </Link>
        </div>
      <form action="https://getform.io/f/80259f21-0a30-41cd-aa6d-a8bcb56a3e75" method="POST">
        <label>Votre Nom</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="mail" name="mail"></input>
        <label name="message">Message</label>
        <textarea rows="6" cols="" placeholder="Entrez votre message ici..." name="message"/>
        <input type="hidden" name="_gotcha" style={{display: "none !important"}}></input>
        <button  type="submit" className="btn">Envoyez</button>
      </form>
    </div>
  )
}

export default Form
