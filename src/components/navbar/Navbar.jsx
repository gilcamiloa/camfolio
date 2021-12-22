import './navbar.scss'
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ aboutOpen, setAboutOpen }) {
  const close = "Close";
  const about = "About";
  return (

    <div className='navbar'>
      <div className={(aboutOpen)}>
        <div className='wrapper'>
          <div className="left">
            <a href="/" className="logo">CAM</a>
          </div>
          <div className="right">
              <NavLink to='/about' component={<About />} onClick={() => setAboutOpen(!aboutOpen)}>
              {(!aboutOpen?about:close)}
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
