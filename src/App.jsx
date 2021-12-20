import './app.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
// import { useState } from "react";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro exact path="/"/>
        <Projects exact path="/projects"/>
        <Skills exact path="/skills"/>
        <About exact path="/about"/>
        <Contact exact path="/contact"/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
