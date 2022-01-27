import './contact.scss';
import shake from '../../images/assets/shake.svg';
import {useState} from 'react';
import faLinkedin from '@fortawesome/free-brands-svg-icons'


export default function Contact() {

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" >
        <div className="title">
          <h1>CONTACT</h1>
        </div>
      <div className="contactContainer">
        <div className="container">
          <div className="left"><img src={shake} alt=""/></div>
          <div className="right">
            <h4>Feel free to reach out to me for any coding needs or collaborations.</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
