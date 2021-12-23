import './sections.scss'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function Sections() {
  return (
    <div className="sections">
      <div className="sectionsContainer">
        <Intro exact path="/" />
        <Projects path="/projects" />
        <Skills path="/skills" />
        <Contact path="/contact" />
      </div>
    </div>
  );
}

export default Sections;
