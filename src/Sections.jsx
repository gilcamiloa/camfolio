import './sections.scss';
import React  from 'react'
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-scroll'
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free"
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// import { Link } from 'react-router-dom'

export default function Sections() {
  // var Scroll = require('react-scroll');
  // var scroll = Scroll.animateScroll;

  // scroll.scrollTo(0);
  // scroll.scrollToPro(100);
  // scroll.scrollToSkills(200);
  // scroll.scrollToContact(300);
  // const [slideTo, setSlideTo] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     if (window.scrollX > 400) {
  //       setShowTopBtn(true);
  //     } else {
  //       setShowTopBtn(false);
  //     }
  //   });
  // }, []);
  const goToIntro = () => {
    window.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  };

  const goToProjects = () => {
    window.scrollTo({
      left: 20,
      behavior: 'smooth',
    });
  };

  const goToSkills = () => {
    window.scrollTo({
      left: 200,
      behavior: 'smooth',
    });
  };

  const goToContact = () => {
    window.scrollTo({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sections" >
      <div className="nav__dots first__current">
        <div id="dot1" className="dot" onClick={goToIntro}></div>
        <div id="dot2" className="dot" onClick={goToProjects}></div>
        <div id="dot3" className="dot" onClick={goToSkills}></div>
        <div id="dot4" className="dot" onClick={goToContact}></div>
        {/* <div id="dot1" className="dot"><Link to='sectionsIntro' onClick={<Intro/>} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot3" className="dot"><Link to='sectionsSkills' onClick={<Skills />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot2" className="dot"><Link to='sectionProjects' onClick={<Projects />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div>
        <div id="dot4" className="dot"><Link to='sectionsContact' onClick={<Contact />} spy={true} smooth={true} duration={500} horizontal={true}></Link></div> */}
      </div>
      <Intro exact path="/" name='sectionsIntro' className="sectionsSlides sectionIntro"/>
      <Skills path="/skills" name='sectionsSkills' className="sectionsSlides sectionSkills"/>
      <Projects path="/projects" name='sectionProjects' className="sectionsSlides sectionProjects"/>
      <Contact path="/contact" name='sectionsContact' className="sectionsSlides sectionContact"/>
    </div>
  );
}
