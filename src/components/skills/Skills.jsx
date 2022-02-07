import './skills.scss'
// import allIcons from 'simple-icons';
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
import SQL from '../../images/assets/sql-logo.png'
import Github from '../../images/assets/github-logo.png'

export default function Skills() {

  const options = {
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
    clickToFront: 400,
    // decel: number
    depth: 1,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: number
    // freezeActive: boolean
    // freezeDecel: boolean
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 1,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    minSpeed: 500,
    // minTags: 0 - 200
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: "#0000",
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
    reverse: false,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: "native", // null | 'div'
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
    wheelZoom: false
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  }
  // const iconSlugs = [
  //   "JS",
  //   "dart",
  //   "java",
  //   "react",
  //   "flutter",
  //   "android",
  //   "html5",
  //   "css3",
  //   "nodedotjs",
  //   "express",
  //   "nextdotjs",
  //   "prisma",
  //   "amazonaws",
  //   "postgresql",
  //   "firebase",
  //   "nginx",
  //   "vercel",
  //   "testinglibrary",
  //   "jest",
  //   "cypress",
  //   "docker",
  //   "git",
  //   "jira",
  //   "github",
  //   "gitlab",
  //   "visualstudiocode",
  //   "androidstudio",
  //   "sonarqube",
  //   "figma"
  // ];
  // const iconTags = iconSlugs.map((slug) => ({
  //   id: slug,
  //   simpleIcon: allIcons.Get(slug)
  // }));


  return (
    <div className="skills">
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div id='icon-cloud'>
          <Cloud
            key={v4()}
            id={"icon"}
            minContrastRatio={1}
            iconSize={100}
            backgroundHexColor={"#fff"}
            fallbackHexColor={"#000"}
            options={options}
            wheelZoom={false}
            >
              <a href=" " title="JS" rel="noopener">
                <img src={JS} height="100" width="100" alt="JS"/>
              </a>
              <a href=" " title="VSC" rel="noopener">
                <img src={VSC} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href=" " rel="noopener">
                <img src={Java} height="100" width="100" alt="Java"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={HTML5} height="100" width="100" alt="HTML5"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={CSS3} height="100" width="100" alt="CSS3"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={React} height="100" width="100" alt="Rails"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={Rails} height="100" width="100" alt="Rails"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={Heroku} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={MSOffice} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={NPM} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href=" " title="JS" rel="noopener">
                <img src={Bootstrap} height="100" width="100" alt="Visual Studio Code"/>
              </a>
              <a href=" " title="git" rel="noopener">
                <img src={git} height="100" width="100" alt="git"/>
              </a>
              <a href=" " title="PostgreSQL" rel="noopener">
                <img src={PostgreSQL} height="100" width="100" alt="PostgreSQL"/>
              </a>
              <a href=" " title="SQL" rel="noopener">
                <img src={SQL} height="100" width="100" alt="PostgreSQL" />
              </a>
              <a href=" " title="Github" rel="noopener">
                <img src={Github} height="100" width="100" alt="PostgreSQL" />
              </a>
            </Cloud>
        </div>
    </div>
  )
};
