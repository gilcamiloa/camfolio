import './contact.scss'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

export default function contact() {
  return (
    <div className="contact" id="contact">
      <h2>linkedin</h2>
      <h2>github</h2>
      <h2>Phone</h2>
      <h2>email</h2>
      <div className='wrapper'>
        <div className="left">
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="right">
          <a href="#intro">Intro</a>
        <div className="right">
          <a href="#about">About</a>
        </div>
        <div className="right">
          <a href="#projects">Projects</a>
        </div>
        <div className="right">
          <a href="#contact">Contact</a>
        </div>
        </div>
      </div>
    </div>
  )
}
