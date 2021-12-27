import './navbar.scss'
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"

export default function Navbar({ aboutOpen, setAboutOpen }) {
  const close = 'CLOSE';
  const about = "ABOUT";

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="/" className="logo"><u>CAM</u></a>
        </div>
        <div className="right">
          <NavLink to={!aboutOpen ? '/about': '/'} component={<About />} onClick={() => setAboutOpen(!aboutOpen)} className='active'>
            {(!aboutOpen ? about : close)}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
