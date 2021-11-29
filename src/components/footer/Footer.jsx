import './footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="www.github.com"><i className="fab fa-github"></i></a>
        <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="www.linkedin.com"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="footer-copyright">
        This footer is made with <i className="fas fa-heart"></i> at Le Wagon
      </div>
    </div>
  )
}
