import './sidebar.scss'
import React from 'react'
import logo from '../../images/cloud-images/logo2-apple-touch-icon.png'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// import { HashLink } from 'react-router-hash-link'
// import Scroll from 'react-scroll';
// const ScrollLink = Scroll.ScrollLink
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import Intro from '../intro/Intro'
// import Skills from '../skills/Skills'
// import About from '../about/About'
// import Projects from '../projects/Projects'
// import Contact from '../contact/Contact'
// // import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className='container'>
      <div className="sidebar_left">
        <a href='' className="logo"><img src={logo} alt='' className="logo"/></a>
      </div>
      <div className="sidebar_router">
        {/* <div><HashLink to={<Intro/>} spy={true} smooth={true} offset={50} duration={500}>Intro</HashLink></div>
        <div><HashLink to={<Skills />} spy={true} smooth={true} offset={50} duration={500}>Skills</HashLink></div>
        <div><HashLink to={<Intro />} spy={true} smooth={true} offset={50} duration={500}>Projects</HashLink></div>
        <div><HashLink to={<Intro />} spy={true} smooth={true} offset={50} duration={500}>About</HashLink></div>
        <div><HashLink to={<Intro />} spy={true} smooth={true} offset={50} duration={500}>Contact</HashLink></div> */}
      <div>
        <div
          style={{"cursor":"pointer"}}
          onClick={() => {
            const intro = document.querySelector('#intro')
            intro.scrollIntoView({ top:0,behavior: 'smooth', block: 'center' })
          }}>
              <span>Intro</span>
        </div>
        <div
          style={{"cursor":"pointer"}}
          onClick={() => {
            const skills = document.querySelector('#skills')
            skills.scrollIntoView({ top: 100,behavior: 'smooth', block: 'center' })
          }}>
              <span>Skills</span>
        </div>

        {/* <a href='#skills'>
            <span>Intro</span>
        </a>
        <a href='#projects'>
            <span>Intro</span>
        </a>
        <a href='#intro'>
            <span>Intro</span>
        </a>
        <a href='#intro'>
            <span>Intro</span>
        </a> */}
      </div>
      </div>
      <div className="sidebar_links">
        <div className='link__wrapper'>
          <a href="https://www.linkedin.com/in/camilo-gil" target="_blank" rel="noopener noreferrer" id='a-linkedin' data-tip data-for="linkedin">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <ReactTooltip id="linkedin" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>LinkedIn</ReactTooltip>
          </a>
          <a href="https://www.github.com/gilcamiloa" target="_blank" rel="noopener noreferrer" id='a-github' data-tip data-for="github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <ReactTooltip id="github" place="top" effect="solid" backgroundColor='none' data-delay-show='1200'>GitHub</ReactTooltip>
          </a>
          <a href="mailto:cgilv6@gmail.com" target="_blank" rel="noopener noreferrer" id='a-email' data-tip data-for="email">
            <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            <ReactTooltip id="email" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Email</ReactTooltip>
          </a>
          {/* <a href="https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing" target="_blank" rel="noreferrer" id='a-resume' data-tip data-for="resume">
        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        <ReactTooltip id="resume" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Resume / CV</ReactTooltip>
      </a> */}
        </div>
      </div>
    </div>
  );
}
