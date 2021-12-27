import './contact.scss';
import {useState} from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" >
      <div id="contact">
        <div className="title">
          <h1>Contact</h1>
        <div className="links container'" >
            <h2>Please fill in the form below.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>        </div>
      </div>
    </div>
  </div>
  )
}
