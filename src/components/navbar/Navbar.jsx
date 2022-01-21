import './navbar.scss'
<<<<<<< Updated upstream
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
=======
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"
import logo from '../../images/assets/logo2-apple-touch-icon.png'
>>>>>>> Stashed changes



export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className='navbar'>
    {/* // <div className={'navbar' + (menuOpen && 'active')}> */}
      <div className='wrapper'>
        <div className="left">
<<<<<<< Updated upstream
          <a href="#intro" className="logo">CAM</a>
=======
          <a href='/' className="logo"><img src={logo} className="logo"/></a>
>>>>>>> Stashed changes
        </div>
        <div className="right">
          <div className="about">
            <a href="#about" className="logo">About</a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <a href="Menu" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faBars} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
