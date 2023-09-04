import React from 'react';
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg';
import About from '../routes/About'
import Project from '../routes/Project';
import Skills from '../routes/Skills';
import Contact from '../routes/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home