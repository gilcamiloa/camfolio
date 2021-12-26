import './sections.scss'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function Sections() {

  return (
    <div className="sections">
      <div className="sectionsContainer">
        <Intro exact path="/" className="sectionSlides"/>
        <Projects path="/projects" className="sectionSlides"/>
        <Skills path="/skills" className="sectionSlides"/>
        <Contact path="/contact" className="sectionSlides"/>
      </div>
    </div>
  );
}

// document.querySelector('.sectionsContainer').addEventListener("wheel", (e) => {
// e.preventDefault();
// e.scrollLeft += e.deltaY;
// });

export default Sections;
