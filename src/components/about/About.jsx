import './about.scss'
import React from 'react';
import Typewriter from 'typewriter-effect';
import cam from '../../images/cam-images/cam-linkedin-nobg.png';

export default function About() {

  // const strings = [
  //   'avid reader 📚',
  //   'lover of all things music 🎷🎼',
  //   'soccer enthusiast ⚽️'
  // ];

  return (
      <div className='about'>
        <div className="about_container">
          <div className="about_left">
              <img src={cam} alt=""/>
          </div>
          <div className="about_right">
              <h1><u>CAMILO IS A FULL STACK DEVELOPER AND ENGINEER..</u></h1>
              <br />
              <p>Camilo has a demonstrated ability of being a agile team player capable of tackling a wide range of analytical problems. He dove into full stack web development after a stint in the heavy-civil construction industry and is an excellent communicator with an ability to adapt to any team environment.</p>
              <p>Having attained a Bachelor's of Science in Civil Engineering from the University of Central Florida, he is on course to complete his MSCS in 2025.</p>
              <div className="typed_wrapper">
                <span className="typed_left">In his free time, he is a&#40;n&#41;&nbsp;</span>
                <span className="typed_right"><s/>
                <Typewriter onInit={(typewriter) => {
                  typewriter.typeString('avid reader 📚')
                  .pauseFor(500)
                  .deleteAll()
                  typewriter.typeString('lover of all things music 🎷🎼')
                  .pauseFor(500)
                  .deleteAll()
                  typewriter.typeString('soccer enthusiast ⚽️')
                  .start();
                  }}/>
                <s/></span>
              </div>
          </div>
        </div>
      </div>
  )
}
