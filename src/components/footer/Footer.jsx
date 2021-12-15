import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return (
    <div className="footer" id="footer">
      <div className='wrapper justify-content-between'>
        <a href="https://www.linkedin.com/in/camilo-gil" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        <a href="https://www.github.com/gilcamiloa" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        <a href="mailto:cgilv6@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></a>
        <a href="https://drive.google.com/file/d/1WRmISIuZONc6EHOZwdzkxUKru2B4K0RY/view?usp=sharing" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon></a>
      </div>
    </div>
  )
}
