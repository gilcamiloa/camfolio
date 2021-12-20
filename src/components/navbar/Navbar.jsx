import './navbar.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import About from "../about/About.jsx"
import { Link } from 'react-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
    {/* // <div className={'navbar' + (menuOpen && 'active')}> */}
      <div className='wrapper'>
        <div className="left">
          <a href="#intro" className="logo">CAM</a>
        </div>
        <div className="right">
          <div className="about">
            {/* <a href="#about" className="logo">About</a> */}
            <Link path="/about" element={ <About/> }></Link>
          </div>
          {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <a href="menu"><FontAwesomeIcon icon={faBars}/></a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
