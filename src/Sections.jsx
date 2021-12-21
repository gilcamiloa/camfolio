import './sections.scss'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function Sections() {
  return (
    <div className="sections">
      <Intro exact path="/" />
      <Projects path="/projects" />
      <Skills path="/skills" />
      <About path="/about" />
      <Contact path="/contact" />
    </div>
  );
}

export default Sections;
