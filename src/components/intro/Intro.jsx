import './intro.scss';
import React from 'react';
import cam from '../../images/cam-images/cam-airjoshuaa-removebg.png'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function Intro() {

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
        className='intro' id="intro">
        <div className="introContainer">
          <div className="left">
            <h1>CAMILO GIL</h1> {/*Copperplate or Lobster*/}
            <br />
            <h2>Full Stack Developer</h2>
            <br />
          </div>
          <motion.div initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}className="right">
            <img src={cam} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
