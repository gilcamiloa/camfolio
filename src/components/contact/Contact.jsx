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
      name: 'github',
      icon: { faGithub },
      link: "https://github.com/gilcamiloa",
      desc: "View my work on GitHub"
    },
    {
      id: 2,
      name: 'linkedin',
      icon: { faLinkedin },
      link: "https://www.linkedin.com/in/camilo-gil/",
      desc: "Connect on LinkedIn"
    },
    {
      id: 3,
      name: 'mail',
      icon: { faMailBulk },
      link: "mailto:cgilv6@gmail.com",
      desc: "Shoot me an email"
    },
    {
      id: 4,
      name: 'resume',
      icon: { faFile },
      link: "mailto:cgilv6@gmail.com",
      desc: "Download my resume"
    }
  ];
  return (
    <div className="contact" >
      <div className="contact_container">
        <div className="contact_left">
          <h5>Any questions?..</h5>
          <h4>Let's connect!</h4>
        </div>
         <div className="contact_right">
          {contact_data.map((item) => (
            <ContactLinks key={item.id} icon={item.icon} link={item.link} desc={item.desc} />
            ))}
        </div>
      </div>
    </div>
  )
}

const ContactLinks = ({ name, icon, link, desc }) => {
  return (
      <div className='contact_links_style'>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <a href={link} target="_blank" rel="noopener noreferrer" id='#a_icon'>
            <h1>{name}</h1>
            <p>{desc}</p>
        </a>
      </div>
  );
};
