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
        <div className="col-10 col-lg-10 sections">
          <div id='intro'><Intro exact path="/"/></div>
          <div id='skills'><Skills path="/skills"/></div>
          <div id='projects'></div><Projects path="/projects" />
          <div id='about'></div><About path="/about"/>
          <div id='contact'></div><Contact path="/contact"/>
        </div>
    </div>
    </div>
  );
}

export default App;
