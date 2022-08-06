import './sidebar.scss'
import React from 'react'
import logo from '../../images/cloud-images/logo2-apple-touch-icon.png'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// // import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className='container'>
      <div className="sidebar_logo">
        <a href='#intro' className="a_logo"><img src={logo} alt='' className="img_logo"/></a>
      </div>
      <div className="sidebar_router">
        {/* <div className='intro_link'>
          <a href='#intro'>
            <span>Intro</span>
          </a>
        </div> */}
        <div className='skills_link'>
          <a href='#skills'>
            <span>Skills</span>
          </a>
        </div>
        <div className='projects_link'>
          <a href='#projects'>
            <span>Projects</span>
          </a>
        </div>
        <div className='about_link'>
          <a href='#about'>
            <span>About</span>
          </a>
        </div>
        <div className='contact_link'>
          <a href='#contact'>
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="sidebar_links">
        <div className='link__wrapper'>
          <a href="https://www.linkedin.com/in/camilo-gil" target="_blank" rel="noopener noreferrer" id='a-linkedin' data-tip data-for="tip-linkedin">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <ReactTooltip id="tip-linkedin" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>LinkedIn</ReactTooltip>
          </a>
          <a href="https://www.github.com/gilcamiloa" target="_blank" rel="noopener noreferrer" id='a-github' data-tip data-for="tip-github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <ReactTooltip id="tip-github" place="top" effect="solid" backgroundColor='none' data-delay-show='1200'>GitHub</ReactTooltip>
          </a>
          <a href="mailto:cgilv6@gmail.com" target="_blank" rel="noopener noreferrer" id='a-email' data-tip data-for="tip-email">
            <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            <ReactTooltip id="tip-email" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Email</ReactTooltip>
          </a>
          {/* <a href="https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing" target="_blank" rel="noreferrer" id='a-resume' data-tip data-for="resume">
        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        <ReactTooltip id="tip-resume" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Resume / CV</ReactTooltip>
      </a> */}
        </div>
      </div>
    </div>
  );
}
