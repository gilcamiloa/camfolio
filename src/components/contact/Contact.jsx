import './contact.scss';
import shake from '../../images/assets/shake.svg';
import {useState} from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" >
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="container" >
        <div className="left">
          <img src={shake} alt="" />
        </div>
        <div className="right">
          <h3>Feel free to reach out to me for any coding needs or collaborations.</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  )
}
