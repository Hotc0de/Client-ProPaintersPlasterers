import { navigationItems } from '../../content/navigation'
import { companyName, contactInfo, footerContent } from '../../content/site'
import type { Locale } from '../../content/types'
import { getLocalizedValue } from '../../utils/getLocalizedValue'
import './Footer.css'

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h2 className="site-footer__company">{companyName}</h2>
          <p className="site-footer__text">
            {getLocalizedValue(contactInfo.address, locale)}
          </p>
          <a className="site-footer__link" href={`tel:${contactInfo.phone}`}>
            {contactInfo.phone}
          </a>
          <a className="site-footer__link" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
        </div>

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

      <div className="site-footer__bottom">
        <p>
          © {currentYear} {companyName}.{' '}
          {getLocalizedValue(footerContent.copyright, locale)}
        </p>
      </div>
    </footer>
  )
}