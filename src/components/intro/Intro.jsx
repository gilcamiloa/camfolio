import './intro.scss';
import React from 'react';
import { animated, useSpring } from '@react-spring/web'

export default function Intro() {
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 600,
  })
  return (
    <animated.div style={styles} className='intro'>
      <div className="intro_container">
        <div className="intro_left">
          <h1>CAMILO GIL</h1>
          <br />
          <h2>Full Stack Developer</h2>
          <br />
          {/* <p>Currently, I am focused on designing <br /> and developing full stack apps <br /> as I search for a team of devs to join.</p> */}
          <br />
          <div className='intro_to_contact'>
            <div className='intro_to_contact_button'>
              <a href='#contact'>
                Contact Info
              </a>
            </div>
          </div>
        </div>
        <div className="intro_right">
          <img src="https://res.cloudinary.com/cgilv6/image/upload/v1666401415/camfolio/cam-images/cam_berlin_nobg_vp2pza.png" alt="" />
        </div>
      </div>
      <div className="arrow_button">
        <a href='#skills'>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </animated.div>
  )
}
