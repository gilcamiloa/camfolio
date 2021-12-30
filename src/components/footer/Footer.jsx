import './footer.scss'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="footer">
      <div className='wrapper'>
        <a href="https://www.linkedin.com/in/camilo-gil" target="_blank" rel="noreferrer" id='linkedin' data-tip data-for="linkedin">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          <ReactTooltip id="linkedin" place="top" effect="solid">LinkedIn</ReactTooltip>
          </a>
        <a href="https://www.github.com/gilcamiloa" target="_blank" rel="noreferrer" id='github' data-tip data-for="github">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <ReactTooltip id="github" place="top" effect="solid">GitHub</ReactTooltip>
          </a>
        <a href="mailto:cgilv6@gmail.com" target="_blank" rel="noreferrer" id='email' data-tip data-for="email">
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
          <ReactTooltip id="email" place="top" effect="solid">Email</ReactTooltip>
          </a>
        <a href="https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing" target="_blank" rel="noreferrer" id='resume' data-tip data-for="resume">
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          <ReactTooltip id="resume" place="top" effect="solid">Resume / CV</ReactTooltip>
        </a>
      </div>
    </div>
  )
}
