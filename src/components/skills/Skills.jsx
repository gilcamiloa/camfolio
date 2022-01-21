import './skills.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faJsSquare,
          faCss3Alt,
          faHtml5,
          faReact,
          faPython
         } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faGem } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar } from 'react-bootstrap'

export default function Skills() {
  return (
    <div className="skills">
        <div className="title">
          <h1>SKILLS</h1>
        </div>
        <div className="container">
          <div className="links">
            <div id="progress_bar__container" className='items'>
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
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}
