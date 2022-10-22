import './about.scss'
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function About() {

  return (
      <div className='about'>
        <div className="about_container">
          <div className="about_left">
          <img src="https://res.cloudinary.com/cgilv6/image/upload/v1664392654/camfolio/cam-images/cam-linkedin-nobg_vuuhz4.png" alt=""/>
          </div>
          <div className="about_right">
              <h1><u>CAMILO IS A FULL STACK DEVELOPER AND ENGINEER..</u></h1>
              <br />
              <p>Camilo has a demonstrated ability of being a agile team player capable of tackling a wide range of analytical problems. He dove and quickly immersed himself in a rabbit hole of full stack web development after a stint in the heavy-civil construction industry. He is an excellent communicator with an ability to adapt to most team environment.</p>
              <p>He has attained a Bachelor's of Science in Civil Engineering from the University of Central Florida and is a full stack  web development bootcamp graduate.</p>
              <div className="typed_wrapper">
                <span className="typed_left">In his free time, he is a&#40;n&#41;&nbsp;</span>
                <span className="typed_right"><s/>
                <Typewriter
                  options = {{
                    strings: [
                      'avid reader of non-fiction 📚',
                      'music lover 🎷🎼',
                      'soccer enthusiast ⚽️'
                    ],
                    autoStart: true,
                    loop: true,
                  }}/>
                <s/></span>
              </div>
          </div>
        </div>
      </div>
  )
}
