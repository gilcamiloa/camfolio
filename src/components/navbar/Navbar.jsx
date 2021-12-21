import './navbar.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import About from "../about/About.jsx"
import { NavLink } from 'react-router-dom'

export default function Navbar({ aboutOpen, setAboutOpen }) {
  return (
    <div className={'navbar' + (aboutOpen && 'active')}>
      <div className='wrapper'>
        <div className="left">
          <a href="/" className="logo">CAM</a>
        </div>
        <div className="right">
          <div className="about">
            {/* <li className="navAbout" onClick={() => setAboutOpen(false)}>
              <a href="/about" className="navAbout" onClick={() => setAboutOpen(false)}>About</a>
            </li> */}
            {/* <Link to='/about'>About</Link> */}
            <NavLink to='/about' component={<About />} onClick={() => setAboutOpen(!aboutOpen)}>About</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
