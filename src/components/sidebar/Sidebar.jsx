import './sidebar.scss'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className='container'>
      <div className="sidebar_logo">
        <a href='#intro'>
          <img className="img_logo" src="https://res.cloudinary.com/cgilv6/image/upload/v1672689608/camfolio/cloud-images/logo2-apple-touch-icon_xxcod7_suo63v.svg" alt=''/>
        </a>
      </div>
        <div className="sidebar_router">
            <a href='#skills' className='sidebar-routes'>
              <span>Skills</span>
            </a>
            <a href='#projects' className='sidebar-routes'>
              <span>Projects</span>
            </a>
            <a href='#about' className='sidebar-routes'>
              <span>About</span>
            </a>
            <a href='#contact' className='sidebar-routes'>
              <span>Contact</span>
            </a>
        </div>
      <div className="sidebar_links">
        <div className='link__wrapper'>
          <a  href="https://www.linkedin.com/in/camilo-gil"
              target="_blank" rel="noopener noreferrer"
              id='a-linkedin' data-tip data-for="tip-linkedin">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <ReactTooltip id="tip-linkedin" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>LinkedIn</ReactTooltip>
          </a>
          <a  href="https://www.github.com/gilcamiloa"
              target="_blank" rel="noopener noreferrer"
              id='a-github' data-tip data-for="tip-github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <ReactTooltip id="tip-github" place="top" effect="solid" backgroundColor='none' data-delay-show='1200'>GitHub</ReactTooltip>
          </a>
          <a  href="mailto:cgilv6@gmail.com"
              target="_blank" rel="noopener noreferrer"
              id='a-email' data-tip data-for="tip-email">
            <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            <ReactTooltip id="tip-email" place="top" effect="solid" backgroundColor='none' data-delay-show='700'>Email</ReactTooltip>
          </a>
        </div>
      </div>
    </div>
  );
}
