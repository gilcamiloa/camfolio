import './sections.scss'
import { React, useState } from 'react'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function Sections() {
  const [dotNav, setDotNav] = useState(false);
  // const imgContainer = document.querySelector('.sections')
  // const dotsContainer = document.querySelector('.nav__dots')

  // React.useEffect(() => {



    // document.getElementById('.sectionsIntro').addEventListener("click", <Intro/>);
    // document.getElementById('.sectionsProjects').addEventListener("click", <Projects/>);
    // document.getElementById('.sectionsSkills').addEventListener("click", <Skills/>);
    // document.getElementById('.sectionsContact').addEventListener("click", <Contact/>);
    // window.addEventListener('click', (event) => {
    //   window.getElementById('dot1')('click', (e) => {
    //     imgContainer.className = 'sections first-active'
    //     dotsContainer.className = 'nav__dots first-current'
    //   })
    //   document.getElementById('dot2').addEventListener('click', () => {
    //     imgContainer.className = 'sections second-active'
    //     dotsContainer.className = 'nav__dots second-current'
    //   })
    //   document.getElementById('dot3').addEventListener('click', () => {
    //     imgContainer.className = 'sections third-active'
    //     dotsContainer.className = 'nav__dots third-current'
    //   })
    // });



  return (
    <div className="sections">
      <div className="sectionsContainer first-active">
        <Intro exact path="/" className="sectionsSlides sectionIntro" dotNav={dotNav} setDotNav={setDotNav}/>
        <Projects path="/projects" className="sectionsSlides sectionProjects"/>
        <Skills path="/skills" className="sectionsSlides sectionSkills"/>
        <Contact path="/contact" className="sectionsSlides sectionContact"/>
      </div>
      <div class="nav__dots first-current">
        <div id="dot1" class="dot"></div>
        <div id="dot2" class="dot"></div>
        <div id="dot3" class="dot"></div>
      </div>
    </div>
  );
}
export default Sections;
