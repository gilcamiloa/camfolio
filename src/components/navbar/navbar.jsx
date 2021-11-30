import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar row justify-content-between'>
      <div class="nav col-lg-3">
          <a class="nav-link active" href="this-site">CAM</a>
      </div>
      <div class="nav col-lg-9 justify-content-right">
        <li class="nav-item">
          <a class="nav-link" href="www.linkedin.com">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="www.linkedin.com">Link</a>
        </li>
      </div>
    </div>
  )
}
