import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index";
import Home from "./routes/Home"
import Project from "./routes/Project"
import Skills from "./routes/Skills"
import About from "./routes/About"
import Contact from "./routes/Contact"

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

  );
}

export default App;
