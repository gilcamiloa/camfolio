import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about">
      <br />
      <h1>(About) HELLO I am a software engineer based in New York City.</h1>
      <br />
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim similique dolorem esse in tempore corporis, voluptatum mollitia debitis eaque dicta suscipit cupiditate id nulla iusto perspiciatis. Deserunt, hic numquam.</h2>
      <br />
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img src={cam} alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Camilo Gil is a master of his craft...</h2>
            <h2>I hear his HAIR is insured for $10,000</h2>
            <h2>He does car commercials... in Japan.</h2>
            <h2>I am a software engineer based in Brooklyn, NYC.</h2>
            <p>I’m a Software Engineer based in Brooklyn, New York City. My background in full stack development started at Le Wagon in London, United Kingdom where I was introduced to full stack development. Currently learning react.js and node.js as well as Python. I hold a Bachelor's of Science in Civil Engineering from the University of Central Florida and intend to begin pursuing a Master's degree in Computer Science from a top university in the coming months. I’m passionate about the digital transformations happening in the Age of Information and what it will entail for the years to come. In my free time, I am an avid reader of nonfiction, aspiring decent guitart player and an explorer of NYC museums.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
