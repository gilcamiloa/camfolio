import './navbar.scss'
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"
import logo from '../../images/assets/logo2-apple-touch-icon.png'
// import logo from '../../images/assets/favicon-32x32.png'

export default function Navbar({ aboutOpen, setAboutOpen }) {
  const close = 'CLOSE';
  const about = "ABOUT";

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href='/' className="logo"><img src={logo} /*alt="logoActive"*/ className="logo"/></a>
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
