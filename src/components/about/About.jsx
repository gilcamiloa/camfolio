import './about.scss'
import cam from '../../images/cam-linkedin.jpg';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <br />
      <div className="row">
        <div className="card col-12 col-lg-6">
          <img src={cam} alt=""/>
        </div>
        <div className="card col-12 col-lg-6">
          <h2>Camilo Gil is a master of his craft...</h2>

          <h2>He has two Fendi purses and a silver lexus..</h2>

          <h2>I hear his HAIR is insured for $10,000</h2>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim ipsam voluptate vel explicabo? Accusamus nisi iste id atque. Non dolor cupiditate eos possimus optio explicabo ducimus unde illo voluptas.
        </div>
      </div>
    </div>
  )
}
