import './navbar.scss'
// import { Mail } from "fortawesome/fontawesome-free"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="intro" className="logo">CAM</a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <i class="hamburger"></i>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line1"></span>
          </div>
          <div className="col justify-content-between">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}
