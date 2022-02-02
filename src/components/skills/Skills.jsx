import './skills.scss'
import allIcons from 'simple-icons';
import { v4 } from "uuid";
import { Cloud } from "react-icon-cloud";
import JS from '../../images/assets/js-logo.png'
import VSC from '../../images/assets/visual-studio-code-logo.png'
import Java from '../../images/assets/java-logo.png'
import HTML5 from '../../images/assets/html5-logo.png'
import CSS3 from '../../images/assets/css3-logo.png'
import React from '../../images/assets/react-logo.png'
import Rails from '../../images/assets/rails-logo.png'
import Heroku from '../../images/assets/heroku-logo.svg'
import MSOffice from '../../images/assets/msofficeicon-logo.png'
import NPM from '../../images/assets/npm-logo.png'
import Bootstrap from '../../images/assets/bootstrap-logo.png'
import git from '../../images/assets/git-logo.png'
import PostgreSQL from '../../images/assets/postgresql-logo.png'

export default function Skills() {

  const tagCanvasOptions = {
    // activateAudio: string
    // activeCursor: string
    // altImage: boolean
    // animTiming: 'Smooth' | 'Linear'
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    clickToFront: 0,
    // decel: number
    // depth: 0.5,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: 100,
    // freezeActive: boolean
    // freezeDecel: boolean
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 4,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.5, -0.5],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    // minSpeed: number
    // minTags: 0 - 200
    // noMouse: true,
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: '#0000',
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    pinchZoom: 0,
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: 200,
    // radiusY: 200,
    // radiusZ: 200,
    // repeatTagsTags: 0 - 64
    reverse: true,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    stretchX: 10000,
    stretchY: 10000,
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: 'native', // null | 'div'
    // tooltipClass: string
    tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: true,
    // zoom: 0,
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  }
  const iconSlugs = [
    "JS",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma"
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug)
  }));


  return (
    <div className="skills">
        <div className="title">
          <h1>SKILLS</h1>
        </div>
        <div>
          <Cloud
            key={v4()}
            id={"icon"}
            minContrastRatio={1}
            iconSize={100}
            backgroundHexColor={"#fff"}
            fallbackHexColor={"#000"}
            tags={iconTags}
            tagCanvasOptions={tagCanvasOptions}
            >
              <a href="#" title="JS" rel="noopener">
                <img src={JS} height="100" width="100" alt="JS"/>
              </a>
              <a href="#" title="VSC" rel="noopener">
                <img src={VSC} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href="#" rel="noopener">
                <img src={Java} height="100" width="100" alt="Java"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={HTML5} height="100" width="100" alt="HTML5"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={CSS3} height="100" width="100" alt="CSS3"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={React} height="100" width="100" alt="Rails"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={Rails} height="100" width="100" alt="Rails"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={Heroku} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={MSOffice} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={NPM} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href="#" title="JS" rel="noopener">
                <img src={Bootstrap} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href="#" title="git" rel="noopener">
                <img src={git} height="100" width="100" alt="git"/>
              </a>
              <a href="#" title="PostgreSQL" rel="noopener">
                <img src={PostgreSQL} height="100" width="100" alt="PostgreSQL"/>
              </a>
              <a href="#" title="PostgreSQL" rel="noopener">
                <span>SQL</span>
              </a>
            </Cloud>
        </div>
    </div>
  )
};














// Progress bar container code..

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {  faJsSquare,
//           faCss3Alt,
//           faHtml5,
//           faReact,
//           faPython
//          } from '@fortawesome/free-brands-svg-icons'
// import { faDatabase, faGem } from '@fortawesome/free-solid-svg-icons'
// import { ProgressBar } from 'react-bootstrap'

/* // <div className="links"> */
/* {/* <div id="progress_bar__container" className='items'>
  <span>HTML&ensp;<FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></span>
  <ProgressBar now="90" visuallyHidden variant="warning" />
  <span>CSS&ensp;<FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon></span>
  <ProgressBar now="85" visuallyHidden variant="success" />
  <span>JavaScript&ensp;<FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></span>
  <ProgressBar now="75" visuallyHidden variant="info" />
  <span>React.js&ensp;<FontAwesomeIcon icon={faReact}></FontAwesomeIcon></span>
  <ProgressBar now="75" visuallyHidden variant="info" />
  <span>Python&ensp;<FontAwesomeIcon icon={faPython}></FontAwesomeIcon></span>
  <ProgressBar now="30" visuallyHidden variant="success" />
  <span>Ruby on Rails&ensp;<FontAwesomeIcon icon={faGem}></FontAwesomeIcon></span>
  <ProgressBar now="85" visuallyHidden variant="danger" />
  <span>SQL&ensp;<FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></span>
  <ProgressBar now="70" visuallyHidden />
  <div className="other">
    <div className="left">
      <h2>Other Skills</h2>
      <h5>Heroku</h5>
      <h5>PostgreSQL</h5>
      <h5>Bootstrap</h5>
      <h5>UI/UX</h5>
    </div>
    <div className="right">
      <h2>Spoken Languages</h2>
      <h5>English (fluent)</h5>
      <h5>Spanish (fluent)</h5>
      <h5>Portuguese (basic)</h5>
    </div>
  </div> */
/* </div>
</div> */
