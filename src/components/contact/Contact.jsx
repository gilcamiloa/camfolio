import './contact.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

  const contact_data = [
    {
      id: 1,
      name: 'linkedin',
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/camilo-gil/",
      desc: "Connect on LinkedIn"
    },
    {
      id: 2,
      name: 'github',
      icon: faGithub,
      link: "https://github.com/gilcamiloa",
      desc: "View my work on GitHub"
    },
    {
      id: 3,
      name: 'email',
      icon: faMailBulk,
      link: "mailto:cgilv6@gmail.com",
      desc: "Shoot me an email"
    },
    // {
    //   id: 4,
    //   name: 'resume',
    //   icon: faFile,
    //   link: "https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing",
    //   desc: "Download my resume"
    // }
  ];

  return (
    <div className="contact" >
      <div className="contact_container">
        <div className="contact_left">
          <h5>Contact me</h5>
          <p>Feel free to get in touch or shoot me an email. I'm always open for a friendly chat and answer any questions you may have..</p>
          <br/>
          <h4>Let's connect!</h4>
        </div>
         <div className="contact_right">
          {contact_data.map((item) => (
            <ContactLinks key={item.id} name={item.name} icon={item.icon} link={item.link} desc={item.desc} />
            ))}
        </div>
      </div>
    </div>
  )
}

const ContactLinks = ({ name, icon, link, desc }) => {
  return (
      <div className='contact_links_style'>
        <a href={link} target="_blank" rel="noopener noreferrer" >
          <div id={name}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></div>
          <h5>{desc}</h5>
        </a>
      </div>
  );
};
