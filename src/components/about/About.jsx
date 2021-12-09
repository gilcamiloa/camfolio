import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about" id="about">
      <br />
      <h1>About</h1>
      <br />
      <br />
      <div className="row">
        <div className="card col-12 col-lg-6">
          <img src={cam} alt=""/>
        </div>
        <div className="card col-12 col-lg-6">
          <h2>Camilo Gil is a master of his craft...</h2>

          <h2>I hear his HAIR is insured for $10,000</h2>

          <h2>He does car commercials... in Japan.</h2>

          <h2>I am a software engineer based in Brooklyn, NYC.</h2>

          <p>I’m a Software Engineer based in Brooklyn, New York City. My background in full stack development started at Le Wagon in London, United Kingdom where I was introduced to full stack development. Currently learning react.js and node.js as well as Python. I hold a Bachelor's of Science in Civil Engineering from the University of Central Florida in Orlando and am currently pursuing a Master's degree in Computer Science from the University of Florida in Gainesville. I’m passionate about the digital transformations happening in the Age of Information and what it will entail for the years to come. In my free time, I am an avid reader of nonfiction and explorer of NYC museums.</p>


        </div>
      </div>
    </div>
  )
}
