import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
            <h1><u>HELLO</u> I am a full stack engineer based in New York City.</h1>
        <div className="container">
          <div className="left">
            <div className="imgContainer">
              <img src={cam} alt=""/>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <p>I’m a full stack engineer based in Brooklyn. My interests include construction technology suited to create large infrastructure applications. I studied full stack development in Le Wagon London and hold a Bachelor's of Science in Civil Engineering from the University of Central Florida. Currently creating projects via react.js and Ruby on Rails as well as Python. In my free time, I am an avid reader of nonfiction and a keen explorer of NYC museums.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// Fuck around with margin for photo location.
