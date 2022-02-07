import './intro.scss'
import Typed from 'react-typed'
import cam from '../../images/cam-images/cam-airjoshuaa-removebg.png'
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
          <div className="left justify-content-left">
            <h1>HELLO</h1>
            <br />
            <h1>My name's Camilo..</h1>
            <h1>but you can call me Cam</h1>
            <br />
            <div className="typed-text">
              <h2><Typed
                    typeSpeed={30}
                    backSpeed={20}
                    strings={strings}
                    loop='true'/>
                </h2>
            </div>
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
