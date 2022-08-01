import './app.scss';
import React, {useRef} from 'react';
// import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


function App() {
  // const [aboutOpen, setAboutOpen] = useState(false);
  const toIntro = useRef(null);
  const toSkills = useRef(null);
  const toProjects = useRef(null);
  const toAbout = useRef(null);
  const toContact = useRef(null);

  return (
    <div className="app">
      <div className="row">
        <div className="col-2 col-lg-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10 col-lg-10 sections justify-content-stretch" >
          <Intro exact path="/" className="sectionsSlides sectionIntro" toIntro={toIntro} />
          <Skills path="/skills" className="sectionsSlides sectionSkills" toSkills={toSkills} />
          <Projects path="/projects" className="sectionsSlides sectionProjects" toProjects={toProjects} />
          <About path="/about" className="sectionsSlides sectionAbout" toAbout={toAbout} />
          <Contact path="/contact" className="sectionsSlides sectionContact" toContact={toContact} />
        </div>
    </div>
    </div>
  );
}

export default App;
