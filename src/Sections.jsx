import './sections.scss'
import { React,useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
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
      <div className="nav__dots first__current">
        {/* <Link to={<Intro/>} spy={true} smooth={true}><div id="dot2" className="dot"></div></Link> */}
        <Link to='sectionsIntro' spy={true} smooth={true} duration={500}><div id="dot1" className="dot"></div></Link>
        <Link to='sectionProjects' spy={true} smooth={true} duration={500}><div id="dot2" className="dot"></div></Link>
        <Link to='sectionsSkills' spy={true} smooth={true} duration={500}><div id="dot3" className="dot"></div></Link>
        <Link to='sectionsContact' spy={true} smooth={true} duration={500}><div id="dot4" className="dot"></div></Link>
        {/* <Link to={<Projects/>} spy={true} smooth={true}><div id="dot2" className="dot"></div></Link>
        <Link to={<Skills/>} spy={true} smooth={true}><div id="dot2" className="dot"></div></Link>
        <Link to={<Contact/>} spy={true} smooth={true}><div id="dot2" className="dot"></div></Link> */}
      </div>
      <Intro exact path="/" name='sectionsIntro' className="sectionsSlides sectionIntro" dotNav={dotNav} setDotNav={setDotNav}/>
      <Projects path="/projects" name='sectionProjects' className="sectionsSlides sectionProjects"/>
      <Skills path="/skills" name='sectionsSkills' className="sectionsSlides sectionSkills"/>
      <Contact path="/contact" name='sectionsContact' className="sectionsSlides sectionContact"/>
    </div>
  );
}
