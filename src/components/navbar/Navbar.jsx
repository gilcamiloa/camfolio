import './navbar.scss'
// import { Mail } from "fortawesome/fontawesome-free"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="intro" className="logo">CAM</a>
          <div className="itemContainer">
            <i class="fas fa-envelope-square"></i>
            <span>cgilv6@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <a href="#intro">Intro</a>
        </div>
        <div className="right">
          <a href="#about">About</a>
        </div>
        <div className="right">
          <a href="#projects">Projects</a>
        </div>
        <div className="right">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
