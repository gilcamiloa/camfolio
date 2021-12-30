import './sections.scss'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function Sections() {

  return (
    <div className="sections">
      <div className="sectionsContainer">
        <Intro exact path="/" className="sectionsSlides sectionIntro"/>
        <Projects path="/projects" className="sectionsSlides sectionProjects"/>
        <Skills path="/skills" className="sectionsSlides sectionSkills"/>
        <Contact path="/contact" className="sectionsSlides sectionContact"/>
      </div>
    </div>
  );
}

export default Sections;
