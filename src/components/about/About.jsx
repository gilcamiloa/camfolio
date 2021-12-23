import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1>(About) HELLO I am a full stack engineer based in New York City.</h1>
        <div className="container">
          <div className="left">
            <div className="imgContainer">
              <img src={cam} alt=""/>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <p>I’m a full stack engineer based in Brooklyn. My background in full stack development started at Le Wagon in London, United Kingdom where I was introduced to full stack development. Currently creating projects via react.js and node.js as well as Python. I hold a Bachelor's of Science in Civil Engineering from the University of Central Florida and intend to pursuing a Master's degree in Computer Science from a top university in the upcoming year. In my free time, I am an avid reader of nonfiction,halfway decent musician and a keen explorer of NYC museums.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// Fuck around with margin for photo location.
