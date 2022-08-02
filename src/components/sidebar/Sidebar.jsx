import './sidebar.scss'
import React from 'react';
import  { Link } from 'react-router-dom'
import logo from '../../images/cloud-images/logo2-apple-touch-icon.png'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {

  // views = [
  //   toIntro,
  //   toSkills,
  //   toProjects,
  //   toAbout,
  //   toContact
  // ];
  // const toIntro = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth" });
  // };

  // const toSkills = (e) => {
  //   window.preventDefault();
  //   window.scrollTo({
  //     top: 100,
  //     behavior: "smooth" });
  // };

  // const toProjects = (e) => {
  //   window.preventDefault();
  //   window.scrollIntoView({
  //     top: 200,
  //     behavior: "smooth" });
  // };

  // const toAbout = (e) => {
  //   window.preventDefault();
  //   window.scrollTo({
  //     top: 300,
  //     behavior: "smooth" });
  // };

  // const toContact = (e) => {
  //   window.preventDefault();
  //   window.scrollTo({
  //     top: 400,
  //     behavior: "smooth" });
  // };

  return (
    <div className='container'>
      <div className="sidebar_left">
        <a href='' className="logo"><img src={logo} alt='' className="logo"/></a>
      </div>
        <div className="sidebar_router">
        <div> <Link to='#intro'>Home</Link></div>
        <div> <Link to='#skills'>Skills</Link></div>
        <div> <Link to='#projects'>Projects</Link></div>
        <div> <Link to='#about'>About</Link></div>
        <div> <Link to='#contact'>Contact</Link></div>
        {/* <div> <Link to={Intro}>Intro</Link></div>
        <div> <Link to={Skills}>Skills</Link></div>
        <div> <Link to={Projects}>Projects</Link></div>
        <div> <Link to={About}>About</Link></div>
        <div> <Link to={Contact}>Contact</Link></div> */}
          {/* <NavLink component={<About />} onClick={() => setAboutOpen(!aboutOpen)} className='active'>ABOUT</NavLink> */}
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
