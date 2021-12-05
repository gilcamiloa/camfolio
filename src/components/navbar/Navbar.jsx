import './navbar.scss'
// import { Mail } from "fortawesome/fontawesome-free"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className='navbar'>
    {/* <div className={"topbar " + (menuOpen && "active")}> */}
      <div className='wrapper'>
        <div className="left">
          <a href="#intro" className="logo">CAM</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1">---</span>
              <span className="line2">---</span>
              <span className="line3">---</span>
              {/* <Menu/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
