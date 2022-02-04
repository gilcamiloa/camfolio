import './about.scss'
import cam from '../../images/cam-images/cam-linkedin-nobg.png';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

export default function About() {
  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}}
                  transition={{ duration: 1 }}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="about">
        <div className="aboutContainer">
          <div className="container">
            <div className="left">
              <div className="imgContainer">
                <img src={cam} alt=""/>
              </div>
            </div>
            <div className="right">
              <h1><u>I'M A FULL STACK ENGINEER CURRENTLY BASED IN BROOKLYN..</u></h1>
              <br />
              <p>My interests include construction technology suited to create large infrastructure applications. I studied full stack development in Le Wagon London and hold a Bachelor's of Science in Civil Engineering from the University of Central Florida. Currently creating projects via react.js and Ruby on Rails as well as learning Java and Python. In my free time, I am a voracious reader and an aspiring explorer of NYC museums.</p>
              <p>Feel free to reach out for any coding needs or collabs. 🤙🏽</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}


// Fuck around with margin for photo location.
