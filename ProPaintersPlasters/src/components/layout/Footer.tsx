import { navigationItems } from '../../content/navigation'
import { companyName, contactInfo, footerContent } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Footer.css'

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* LEFT - BRAND */}
        <div className="site-footer__brand">
          <h2 className="site-footer__company">
            {companyName}
          </h2>

          <p className="site-footer__text">
            {getLocalizedValue(contactInfo.address, locale)}
          </p>

          <p className="site-footer__text">
            {contactInfo.phone}
          </p>

          <a
            href={`mailto:${contactInfo.email}`}
            className="site-footer__link"
          >
            {contactInfo.email}
          </a>
        </div>

        {/* RIGHT - NAV */}
        <div className="site-footer__nav-block">
          <h3 className="site-footer__heading">
            {getLocalizedValue(footerContent.navigationLabel, locale)}
          </h3>

          <nav className="site-footer__nav">
            {navigationItems.map((item) => (
              <a key={item.id} href={item.href}>
                {getLocalizedValue(item.label, locale)}
              </a>
            ))}
          </nav>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="site-footer__bottom">
        © {new Date().getFullYear()} {companyName}. {getLocalizedValue(footerContent.copyright, locale)}
      </div>
    </footer>
  )
}