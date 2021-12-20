import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" component={ <Intro/> }/>
        <Route path="/about" component={ <About/> }/>
        <Route path="/projects" component={ <Projects/> }/>
        <Route path="/skills" component={ <Skills/> }/>
        <Route path="/contact" component={ < Contact/> }/>
      </Routes>
    </>
  );
}

export default AppRoutes;
