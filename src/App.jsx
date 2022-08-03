import './app.scss';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className="app">
      <div className="row">
        <div className="col-2 col-lg-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10 col-lg-10 sections" >
          <Intro exact path="/" id='#intro'/>
          <Skills path="skills" id='#skills' />
          <Projects path="projects" id='#projects' />
          <About path="about" id='#about' />
          <Contact path="contact" id='/contact' />
        </div>
    </div>
    </div>
  );
}

export default App;
