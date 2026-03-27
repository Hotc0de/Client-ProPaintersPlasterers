import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* LEFT - BRAND */}
        <div className="site-footer__brand">
          <h2 className="site-footer__company">
            Pro Painters & Plasters
          </h2>

          <p className="site-footer__text">
            Christchurch, New Zealand
          </p>

          <p className="site-footer__text">
            +64 21 000 0000
          </p>

          <a
            href="mailto:hello@propainters.co.nz"
            className="site-footer__link"
          >
            hello@propainters.co.nz
          </a>
        </div>

        {/* RIGHT - NAV */}
        <div className="site-footer__nav-block">
          <h3 className="site-footer__heading">
            Quick Links
          </h3>

          <nav className="site-footer__nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Pro Painters & Plasters. All rights reserved.
      </div>
    </footer>
  )
}