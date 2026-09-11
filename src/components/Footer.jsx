import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Chaos Prime. All rights reserved.
        </p>
        <p className="footer__tagline">Built with React & Vite</p>
      </div>
    </footer>
  )
}

export default Footer