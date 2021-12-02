import './contact.scss'

export default function contact() {
  return (
    <div className="contact" id="contact">
      <h2>linkedin</h2>
      <h2>github</h2>
      <h2>Phone</h2>
      <h2>email</h2>
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
