import './intro.scss'
import Typed from 'react-typed'
// import { useState, useEffect } from 'react-dom'
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
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
              className='intro' id="intro">
        <div className="introContainer">
          <div className="justify-content-left">
            <h1>HELLO</h1>
            <br />
            <h1>My name is Camilo André Gil Velasquez Carvajal Mendoza..</h1>
          </div>
          <br />
          <div className="typed-text">
            <h2><Typed
                  typeSpeed={30}
                  backSpeed={20}
                  strings={strings}
                  loop='true'
                  // count={count}
                  // setCount={setCount}

              // onComplete: function (t) {
              //   // existing text has now been removed so let's actually clear everything out
              //   // and setup the proper Typed loop we want. If we don't do this, the original
              //   // text content breaks the flow of the loop.
              //   t.destroy();
              // document.getElementsByClassName(typed_class)[0].textContent = '';
              // new Typed('.' + typed_class, options);
                  />
            </h2>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
