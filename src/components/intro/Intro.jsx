import './intro.scss';
import React from 'react';
// import cam from '../../images/cam-images/cam-airjoshuaa-removebg.png'
import camBlue from '../../images/cam-images/cam-blue.jpeg'
// import down_arrow from '../../images/cloud-images/down.png'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function Intro() {

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
        <div className='intro'>
          <div className="intro_container">
            <div className="intro_left">
              <h1>CAMILO GIL</h1>
              <br />
              <h2>Full Stack Developer</h2>
              <br />
              <p>Currently, I am focused on designing <br /> and developing full stack apps <br /> as I search for a team of devs to join.</p>
              <br />
              <div className='intro_to_contact'>
                <div className='intro_to_contact_button'>
                  <a href='#contact'>
                    Contact Me!
                  </a>
                </div>
              </div>
            </div>
            <div className="intro_right">
              <img src={camBlue} alt="" />
            </div>
          </div>
          <div className="arrow_button">
            <a href='#skills'>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
          </motion.div>
    </AnimatePresence>
  )
}
