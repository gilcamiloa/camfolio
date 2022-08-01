import './sidebar.scss'
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../images/cloud-images/logo2-apple-touch-icon.png'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(views) {

  views = {
    toIntro,
    toSkills,
    toProjects,
    toAbout,
    toContact
  }
  const toIntro = (e) => {
    e.preventDefault();
    toIntro.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toSkills = (e) => {
    e.preventDefault();
    window.current.scrollTo({ top: 100, behavior: "smooth" });
  };

  const toProjects = (e) => {
    e.preventDefault();
    toProjects.current.scrollIntoView({ top: 200, behavior: "smooth" });
  };

  const toAbout = (e) => {
    e.preventDefault();
    window.current.scrollTo({ top: 300, behavior: "smooth" });
  };

  const toContact = (e) => {
    e.preventDefault();
    window.current.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
      <div className='container'>
        <div className="sidebar_left">
          <a href='/' className="logo"><img src={logo} alt='' className="logo"/></a>
        </div>
        <div className="sidebar_router">
          <div onClick={toIntro}><NavLink to='/projects'>Intro</NavLink></div>
          <div onClick={toSkills}><NavLink to='/projects'>Skills</NavLink></div>
          <div onClick={toProjects}><NavLink to='/projects'>Projects</NavLink></div>
          <div onClick={toAbout}><NavLink to='/projects'>About</NavLink></div>
          <div onClick={toContact}><NavLink to='/projects'>Contact</NavLink></div>
          {/* <NavLink component={<About />} onClick={() => setAboutOpen(!aboutOpen)} className='active'>ABOUT</NavLink> */}
        </div>
        <div className="sidebar_items">
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
