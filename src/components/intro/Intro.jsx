import './intro.scss';
import React from 'react';
import cam from '../../images/cam-images/cam-airjoshuaa-removebg.png'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function Intro() {

  return (
    <AnimatePresence>
        <div className='intro'>
          <motion.div initial={{opacity: 0}}
                      transition={{ duration: 1}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
            className='intro_container'>
              <div className="intro_left">
                <h1>CAMILO GIL</h1> {/*Copperplate or Lobster*/}
                <br />
                <h2>Full Stack Developer</h2>
                <br />
              </div>
              <div className="intro_right">
                <img src={cam} alt="" />
              </div>
          </motion.div>
        </div>
    </AnimatePresence>
  )
}
