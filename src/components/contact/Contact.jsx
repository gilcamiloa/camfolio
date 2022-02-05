import './contact.scss';
import HTMLBanner from '../../images/assets/html-banner.png';
import {useState} from 'react';
// import faLinkedin from '@fortawesome/free-brands-svg-icons'


export default function Contact() {

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" >
      <div className="contactContainer">
        <div className="left">
          <h4>Let's connect!</h4>
          <img src={HTMLBanner} alt=""/>
        </div>
        {/* <div className="container"> */}
          <div className="right">
            <form onSubmit={handleSubmit} className='form'>
            <span><input type="text" placeholder="First name" /><input type="text" placeholder="Last Name" /></span>
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
          </div>
        </div>
      </div>
    // </div>
  )
}
