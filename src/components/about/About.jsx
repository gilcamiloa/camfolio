import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
            <h1><u>HELLO</u> I am a full stack engineer based in Brooklyn.</h1>
        <div className="container">
          <div className="left">
            <div className="imgContainer">
              <img src={cam} alt=""/>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <p>My interests include construction technology suited to create large infrastructure applications. I studied full stack development in Le Wagon London and hold a Bachelor's of Science in Civil Engineering from the University of Central Florida. Currently creating projects via react.js and Ruby on Rails as well as learning Java and Python on the side. In my free time, I am a voracious reader and an aspiring explorer of NYC museums.</p>
              <br />
              <p>Feel free to reach out to me for any coding needs or collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// Fuck around with margin for photo location.
