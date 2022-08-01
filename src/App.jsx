import './app.scss';
import React from 'react';
// import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


function App() {
  // const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="app">
      <div className="row">
        <div className="d-flex col-2 col-lg-2">
          <Sidebar/>
        </div>
        <div className="col-10 col-lg-10 sections justify-content-stretch" >
          <Intro exact path="/" className="sectionsSlides sectionIntro" />
          <Skills path="/skills" className="sectionsSlides sectionSkills" />
          <Projects path="/projects" className="sectionsSlides sectionProjects" />
          <About path="/about" className="sectionsSlides sectionAbout" />
          <Contact path="/contact" className="sectionsSlides sectionContact" />
        </div>
    </div>
    </div>
  );
}

export default App;
