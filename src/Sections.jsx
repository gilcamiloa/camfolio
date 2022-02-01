import './sections.scss'
import { React, useState } from 'react'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

export default function Sections() {
  const [dotNav, setDotNav] = useState(false);

  return (
    <div className="sections">
      <div className="sectionsContainer first-active">
        <Intro exact path="/" className="sectionsSlides sectionIntro" dotNav={dotNav} setDotNav={setDotNav}/>
        <Projects path="/projects" className="sectionsSlides sectionProjects"/>
        <Skills path="/skills" className="sectionsSlides sectionSkills"/>
        <Contact path="/contact" className="sectionsSlides sectionContact"/>
      </div>
    </div>
  );
}
