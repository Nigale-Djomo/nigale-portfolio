import React from 'react';
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg';
import About from '../routes/About'
import Project from '../routes/Project';
import Skills from '../routes/Skills';
import Certificat from '../routes/Certificat';
import Contact from '../routes/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg/>
      <About/>
      {/*<Project/>*/}
      <Certificat/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home