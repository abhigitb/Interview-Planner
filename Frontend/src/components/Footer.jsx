import { Link } from "react-router"
import "./footer.scss"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span>•</span>
        <Link to="/terms">Terms & Conditions</Link>
        <span>•</span>
        <a
          href="https://www.linkedin.com/in/abhijeet-chandra-8aa1b12b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>
      </div>

      <p className="footer-credit">
        Built with <span>♥</span> by Abhijeet
      </p>
    </footer>
  )
}

export default Footer