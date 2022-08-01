import './about.scss'
import React from 'react';
import Typed from 'react-typed'
import cam from '../../images/cam-images/cam-linkedin-nobg.png';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function About() {

  const strings = [
    'avid reader 📚',
    'lover of all things music 🎷🎼',
    'soccer enthusiast ⚽️'
  ];

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1 }}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="about">
        <div className="aboutContainer">
          <div className="left">
            <div className="imgContainer">
              <img src={cam} alt=""/>
            </div>
          </div>
          <div className="right">
            <h1><u>CAMILO IS A FULL STACK DEVELOPER AND ENGINEER..</u></h1>
            <br />
            <p>Camilo has a demonstrated ability of being a agile team player capable of tackling a wide range of analytical problems. He dove into full stack web development after a stint in the heavy-civil construction industry and is an excellent communicator with an ability to adapt to any team environment.</p>
            <p>Having attained a Bachelor's of Science in Civil Engineering from the University of Central Florida, he is on course to complete his MSCS in 2025.</p>
            <h5 id="free">In his free time, he is a&#40;n&#41;&nbsp;
              <span><s/><Typed
                typeSpeed={50}
                backSpeed={40}
                strings={strings}
                loop='true' /><s/>
              </span>
            </h5>
            <break></break>
          </div>
          <div className="footer">
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}
