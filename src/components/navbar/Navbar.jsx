import './navbar.scss'
import { NavLink } from 'react-router-dom'
import About from "../about/About.jsx"
import { useNavigate } from "react-router-dom"

export default function Navbar({ aboutOpen, setAboutOpen }) {
  // const nav = useNavigate;
  const close = 'CLOSE';
  const about = "ABOUT";

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="/" className="logo"><u>CAM</u></a>
        </div>
        <div className="right">
          <NavLink to={!aboutOpen ? '/about': '/'} component={<About />} onClick={() => setAboutOpen(!aboutOpen)}>
            <u>{(!aboutOpen ? about : close)}</u>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
