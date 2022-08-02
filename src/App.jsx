import './app.scss';
import React from 'react';
// import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


function App() {
  // const [aboutOpen, setAboutOpen] = useState(false);
  // const toIntro = useRef(null);
  // const toSkills = useRef(null);
  // const toProjects = useRef(null);
  // const toAbout = useRef(null);
  // const toContact = useRef(null);

  // state = {
  //   name: "",
  // }

  // handleCallback = (toIntro) => {
  //   this.setState({ name: toIntro })
  // }

  // handleCallback = (toSkills) => {
  //   this.setState({ name: toSkills })
  // }

  // handleCallback = (toProjects) => {
  //   this.setState({ name: toProjects })
  // }

  // handleCallback = (toAbout) => {
  //   this.setState({ name: toAbout })
  // }

  // handleCallback = (toContact) => {
  //   this.setState({ name: toContact })
  // }

  // const { name } = this.state;

  return (
    <div className="app">
      <div className="row">
        <div className="col-2 col-lg-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10 col-lg-10 sections justify-content-stretch" >
          <Intro exact path="/" ref={(toIntro) => { this.child = toIntro; }} />
          <Skills path="/skills" ref={(toSkills) => { this.child = toSkills; }} />
          <Projects path="/projects" ref={(toProjects) => { this.child = toProjects; }} />
          <About path="/about" ref={(toAbout) => { this.child = toAbout; }} />
          <Contact path="/contact" ref={(toContact) => { this.child = toContact; }} />
        </div>
    </div>
    </div>
  );
}

export default App;
