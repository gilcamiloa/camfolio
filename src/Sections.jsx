import './sections.scss'
import { React,useState } from 'react'
import { Link } from 'react-router-dom'
import { useHorizontalScroll } from '../src/horizontalScroll.jsx'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

export default function Sections() {
  const [dotNav, setDotNav] = useState(false);
  const scrollRef = useHorizontalScroll();
  return (
    <div className="sections" ref={scrollRef} >
      <Intro exact path="/" className="sectionsSlides sectionIntro" dotNav={dotNav} setDotNav={setDotNav}/>
      <Projects path="/projects" className="sectionsSlides sectionProjects"/>
      <Skills path="/skills" className="sectionsSlides sectionSkills"/>
      <Contact path="/contact" className="sectionsSlides sectionContact"/>
      <div className="nav__dots first__current">
        <Link to={<Intro />}><div id="dot1" className="dot"></div></Link>
        <div id="dot2" className="dot" onClick={<Projects/>}></div>
        <div id="dot3" className="dot"><Link to={<Skills />}></Link></div>
        <Link to={<Contact />}><div id="dot4" className="dot"></div></Link>
      </div>
    </div>
  );
}
