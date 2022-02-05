import './sections.scss'
import { React, useState } from 'react'
import { useHorizontalScroll } from '../src/horizontalScroll.jsx'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

export default function Sections() {
  const [dotNav, setDotNav] = useState(false);
  const scrollRef = useHorizontalScroll();
  // style = {{ width: 400, overflow: "auto" }
  return (
    <div className="sections" ref={scrollRef} >
      {/* <div className="sectionsContainer first-active" ref={scrollRef} > */}
        <Intro exact path="/" className="sectionsSlides sectionIntro" dotNav={dotNav} setDotNav={setDotNav}/>
        <Projects path="/projects" className="sectionsSlides sectionProjects"/>
        <Skills path="/skills" className="sectionsSlides sectionSkills"/>
        <Contact path="/contact" className="sectionsSlides sectionContact"/>
      </div>
    // </div>
  );
}
