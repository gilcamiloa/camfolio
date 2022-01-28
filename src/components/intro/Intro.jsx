import './intro.scss'
import Typed from 'react-typed'
import { useState, useEffect } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function Intro() {

  const strings = ['Full Stack Engineer',
    'Brooklyn based 🗽',
    'Avid reader 📚',
    'Lover of good music 🎷🎼',
    'and some ol ⚽️'
  ];

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 2}}
              animate={{opacity: 2}}
              exit={{opacity: 2}}
              className='intro' id="intro">
        <div className="IntroContainer">
          <div className="justify-content-left">
            <h1>HELLO</h1>
            <br />
            <h1>My name is Camilo André Gil Velasquez Carvajal Mendoza..</h1>
          </div>
          <br />
          <div className="typed-text">
            <h2><Typed
                  typeSpeed={15}
                  backSpeed={25}
                  strings={strings}/>
            </h2>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
