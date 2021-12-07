import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import Menu from "./components/menu/Menu";



export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className='navbar'>
    {/* // <div className={'navbar' + (menuOpen && 'active')}> */}
      <div className='wrapper'>
        <div className="left">
          <a href="#intro" className="logo">CAM</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <a href="Menu" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faBars} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
